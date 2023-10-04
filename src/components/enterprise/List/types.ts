export type TEnterprise = {
    id: number;
    Name: string;
    location: string;
    parent: number;
}

export type TEnterprises = {
    enterprises: TEnterprise[]
}