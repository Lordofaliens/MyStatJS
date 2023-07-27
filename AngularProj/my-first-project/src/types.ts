export type UnionUserType =
  | keyof Omit<UserInterface, 'address' | 'company'>
  | keyof Omit<AddressInterface, 'geo'>
  | keyof GeoInterface
  | keyof CompanyInterface;

export interface UserInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: AddressInterface;
    company: CompanyInterface;
}

export interface AddressInterface {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoInterface;
}

export interface GeoInterface {
    lat: number;
    lng: number;
}

export interface CompanyInterface {
    name: string;
    catchPhrase: string;
    bs: string;
}



// interface AInterface {
//     a: number
// }

// interface BInterface extends AInterface {
//     b: number,
//     method: (a: AInterface, b: boolean) => null
// }

// type AType = {
//     a: number,
//     b: number[],
// }

// type PassType = {
//     password: string
// }

// type EmailType = {
//     email: string
// }

// type AuthType = PassType & EmailType;

// const data: AuthType = {
//     email: "fjfdjfdkjfdkjf",
//     password: "sqsqsqsq"
// }

// function abc(): AuthType {
//     return data;
// }

// const dataFromReturn = abc();

// // function fn<T, ReturnType>(a: T): ReturnType {
// //     return { a: 1 } as ReturnType
// // }

// // fn<AInterface, { name: string }>({ a: 10 });

// type AuthT = {
//     email: string,
//     password: string
// }

// type RegisterT = AuthT & { firstName: string, birthday: Date }

// type UserT = RegisterT & { token: string }

// const user: UserT = {
//     email: '',

// }

// type UserType = AuthT | RegisterT;