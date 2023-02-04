export class Student{
	NameArabic:string ="";
	NameEnglish:string ="";
	ID:number = 0;
	FirstName:string = "";
	LastName:string = "";
	Mobile:string = "";
	Email:string = "";
	NationalID:string = "";
	Age:number = 0;
	Name:string = "";
	

	constructor(FirstName: string,LastName:string,Mobile:string,Email:string,NationalID:string,Age: number,NameArabic?:string)
	{
		this.FirstName=FirstName;
		this.LastName = LastName;
		this.Mobile = Mobile;
		this.Email = Email;
		this.NationalID = NationalID;
		this.Age=Age;
		this.Name=FirstName+LastName;
		this.NameEnglish = this.Name;
	}

}