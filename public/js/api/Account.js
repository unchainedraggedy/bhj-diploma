/**
 * Класс Account наследуется от Entity.
 * Управляет счетами пользователя.
 * Имеет свойство URL со значением '/account'
 * */
class Account extends Entity {
  /**
   * Получает информацию о счёте
   * */
  static get(id = '', callback){
    createRequest({
      url: `${this.URL}/${id}`,
      callback: (err, response) => {
        if(err) {
          console.error(err);
          callback(err, null);
        } else {
          callback(null, response);
        }
      }
    })
  }
}
