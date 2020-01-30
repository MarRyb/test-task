export interface IEntityDate {
    created: number;
    viewed: number;
}

export interface IEntityLanguage {
    id: number;
    code: string;
    title: string;
    tooltip: string;
}

export interface IEntity {
    id: number;
    alias: string;
    title: string;
    views: number;
    description: string | IEntityQuestion;
    entity: string;
    date: IEntityDate;
    language: IEntityLanguage;
}

export interface IEntityQuestion {
  question: string;
  answer: string;
}

export interface IEntityPagination {
    page: number;
    pages: number;
    items: number;
    limit: number;
}

export interface IEntityFilters {
    entities: string[];
}

export interface IEntityData {
    total: number;
    list: IEntity[];
    pagination: IEntityPagination;
    filters: IEntityFilters;
}