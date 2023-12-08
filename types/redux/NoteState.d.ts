export type TNoteState = Array<INote>;

export interface INote {
  id: string;
  text: string;
  hashTags: Array<string>;
}
