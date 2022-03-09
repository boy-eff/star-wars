import { People } from "../_models/people";

export interface PeopleDto {
    count: number;
    next: string;
    previous: string;
    results: People[];
}