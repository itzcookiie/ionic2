import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public userItems = []
  private users:Users[] = [];
  private USER_STORAGE:string = 'user'

  public async fetchData() {
    const response = await fetch('http://www.json-generator.com/api/json/get/bOjYXEnnci?indent=2')
    const responseJSON = await response.json()
    const responseData = responseJSON.map(item => {
      const { about } = item 
      const segmentedAbout:string = about.slice(0, 100) + '...'
      this.userItems.push({...item, segmentedAbout})
    })
    return responseData 
  }

  public getItem(id) {
    console.log(typeof id, 'id please') 
    console.log(this.userItems.filter((item,index) => index === id))
    return this.userItems.filter((item,index) => index === id) 
  }

  public saveUser(user) {
    this.users.push(user)
    Storage.set({
      key: this.USER_STORAGE,
      value: JSON.stringify(this.users)
    })
  }

  public async findUser({ email, password }) {
    const usersData = await Storage.get({ key: this.USER_STORAGE })
    const users = JSON.parse(usersData.value) || []
    console.log(users.length, 'users')
    if(users.length > 0) {
      const user = users.filter(user => user.email === email && user.password === password)
      return user.find(u => u)
    }
    return undefined
  }
}

interface Users {
  email: string;
  password: string;
}





