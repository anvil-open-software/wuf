export class ObjectUtils {
    public static extend(target: any, source: any): any {
        for (const ownProperty in source) {
            // Only copy own properties.
            if (source.hasOwnProperty(ownProperty)) {
                target[ownProperty] = source[ownProperty];
            }
        }

        return target;
    }
}
