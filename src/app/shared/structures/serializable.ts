export abstract class Serializable {
  /** creates a new object from a blank json object */
  abstract fromJSON(json: any): void
  /** creates a copy of the object */
  abstract clone(): any
}
