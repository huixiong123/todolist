export class ProjectDetail {
  id: number;
  name: string;
  createDate: string;
  constructor(id: number, name: string, createDate: string) {
    this.id = id;
    this.name = name;
    this.createDate = createDate;
  }
}
