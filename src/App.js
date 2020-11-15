import { Component } from 'react';

class App extends Component{

  componentDidMount() {
    if(!('Notification' in window)){
      console.error('does not support')
    }else{
      Notification.requestPermission()
        .then((permission) => {
          this.checkPermission(permission);
        });
    }
  } 

  checkPermission = (permission) => {
    if(permission === 'granted') {
      const grantedOptions = {
        body: 'Bildirimlere izin verdiğiniz için teşekkür ederiz',
        icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
      }
      this.showNotification('Teşekkürler', grantedOptions);
    }
  }

  showNotification = (title, options) => {
    if(title === undefined || options === undefined){
      title = title ? title : 'Test bildirim başlığı';
      options = {
        body: 'Test bildirimi',
        icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
      }
    }
    new Notification(title, options);    
  }
  
  render(){
    return(
      <div>
        <button onClick={() => {this.showNotification()}}>Bildirim gönder</button>
      </div>
    )
  }

}
export default App;