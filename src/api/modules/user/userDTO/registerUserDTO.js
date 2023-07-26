//typescript projects use interfaces/DTO.

export default class RegisterUserDTO{
    name;
    surname;
    email;
    password;
    active;
    createdAt;
    updatedAt;
    deletedAt;

    constructor(data){
        this.name = data.name,
        this.surname = data.surname,
        this.email = data.email,
        this.password = data.password,
        this.active = data.active,
        this.createdAt = data.createdAt,
        this.updatedAt = data.updatedAt,
        this.deletedAt = data.deletedAt
    }

}
