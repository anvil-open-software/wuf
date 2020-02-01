/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

import { WufSmartTableLocalDataSource } from '../local/local.data-source';
import { ServerSourceConf } from './server-source.conf';
import { getDeepFromObject } from '../../services/helpers';
import { map } from 'rxjs/operators';


export class WufSmartTableServerDataSource extends WufSmartTableLocalDataSource {

    protected conf: ServerSourceConf;

    protected lastRequestCount: number = 0;

    constructor(protected httpClient: HttpClient, conf: ServerSourceConf | {} = {}) {
        super();

        this.conf = new ServerSourceConf(conf);

        if (!this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
    }

    count(): number {
        return this.lastRequestCount;
    }

    getElements(): Promise<any> {
        return this.requestElements()
            .pipe(
                map(res => {
                    this.lastRequestCount = this.extractTotalFromResponse(res);
                    this.data = this.extractDataFromResponse(res);

                    return this.data;
                })
            )
            .toPromise();
    }

    /**
     * Extracts array of data from server response
     * @param res
     *
     */
    protected extractDataFromResponse(res: any): Array<any> {
        const rawData = res.json();
        const data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;

        if (data instanceof Array) {
            return data;
        }

        throw new Error(`Data must be an array.
    Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
    }

    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     *
     */
    protected extractTotalFromResponse(res: any): number {
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        } else {
            const rawData = res.json();
            return getDeepFromObject(rawData, this.conf.totalKey, 0);
        }
    }

    protected requestElements(): Observable<any> {
      let params: HttpParams;

      params = this.createRequestOptions()
      const options = { params };
      return this.httpClient.get(this.conf.endPoint, options /* this.createRequestOptions()*/);
    }

    protected createRequestOptions(): HttpParams {
        let params: HttpParams = new HttpParams();

        params = this.addSortRequestOptions(params);
        params = this.addFilterRequestOptions(params);
        params = this.addPagerRequestOptions(params);

        return params;
    }

    protected addSortRequestOptions(requestOptions: HttpParams): HttpParams {
      let params: HttpParams = requestOptions;

      if (this.sortConf) {
        this.sortConf.forEach((fieldConf) => {
          params.set(this.conf.sortFieldKey, fieldConf.field);
          params.set(this.conf.sortDirKey, fieldConf.direction.toUpperCase());
        });
      }

      return params;
    }

    protected addFilterRequestOptions(requestOptions: HttpParams): HttpParams {
      let params: HttpParams = requestOptions;

      if (this.filterConf.filters) {
        this.filterConf.filters.forEach((fieldConf: any) => {
          if (fieldConf['search']) {
              params.set(this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
          }
        });
      }

      return params;
    }

    protected addPagerRequestOptions(requestOptions: HttpParams): HttpParams {
      let params: HttpParams = requestOptions;

      if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
        params.set(this.conf.pagerPageKey, this.pagingConf['page']);
        params.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
      }

      return params;
    }
}
