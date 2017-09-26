export interface Serializable {
  /** creates a new object from a blank json object */
  fromJSON(json: any): void;
}
