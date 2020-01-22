import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public validUser:boolean = false
  public currentItem:UserItem[]
  public userItems:UserItem[] = []
  private users:User[] = [];
  private USER_STORAGE:string = 'user'
  private 
  

  public async fetchData(): Promise<void> {
    const response = await fetch('http://www.json-generator.com/api/json/get/bOjYXEnnci?indent=2')
    const responseJSON:UserItem[] = await response.json()
    await responseJSON.map((item:UserItem) => {
      const { about } = item 
      const segmentedAbout:string = about.slice(0, 100) + '...'
      this.userItems.push({...item, segmentedAbout})
    })
  }

  public getItem(id: number): void {
    console.log(typeof id, 'id please') 
    console.log(this.userItems.filter((item,index) => index === id))
    this.currentItem = this.userItems.filter((item,index) => index === id) 
  }

  public saveUser(user): void {
    this.users.push(user)
    Storage.set({
      key: this.USER_STORAGE,
      value: JSON.stringify(this.users)
    })
  }

  public async findUser(userInfo: User):Promise<User | undefined>  {
    const usersData = await Storage.get({ key: this.USER_STORAGE })
    const users = JSON.parse(usersData.value) 
    if(users.length > 0) {
      const user = users.filter((user:User) => user.email === userInfo.email && user.password === userInfo.password) 
      return user.find((u:User) => u) 
    }
    return undefined
  }

  public validateUser(): void {
    this.validUser = true;
  }

  public inValidateUser(): void {
    this.validUser = false;
  }
}

interface User {
  email: string;
  password: string;
}

interface UserItem {
  id: number;
  name: string
  age: number;
  picture: string;
  about: string;
  segmentedAbout: string;
}




