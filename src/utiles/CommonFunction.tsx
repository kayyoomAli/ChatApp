import Auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
const logInWithEmailAndPassword = (
  email: string,
  password: string,
  callBack: any,
) => {
  Auth()
    .signInWithEmailAndPassword(email, password)
    .then(data => {
      console.log("callcallcall",data)
      callBack(data.user.uid);
      console.log('Login SuccesFully ', data.user.uid);
    })
    .catch(error => {
      console.log("errrior",error)
      if (error.code === 'auth/invalid-email') {
        console.log('Please Enter Valid Email');
      }
      if (error.code === 'auth/user-not-found ') {
        console.log('User Not Register with US');
      }
      if (error.code === 'auth/wrong-password') {
        console.log('Enter Password is wrong');
      }
    });
};

const logoutWithFirebase = () => {
  Auth().signOut();
};

const SiginUpWithEmailIDandPassword = (email: string, password: string) => {
  Auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

const SubmitUser = (Id: any, Name: any, Position: any) => {
  return new Promise(function (resolve, reject) {
    // let key = Id;
    // if (Id != null) {
    //   key = Id;
    // } else {
    //   key = database().ref().push().key;
    // }
    let dataToSave = {
      Id: Id,
      Name: Name,
      Position: Position,
    };
    console.log('dataTosave', dataToSave);

    database()
      .ref('users/' +Id)
      .update(dataToSave)
      .then(snapShot => {
        resolve(snapShot);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const AddUserAtSignUp= async(name:any,email:any,dob:any,uid:any)=>{
  try {
    return database().ref('users/' + uid).set(
      {
        name:name,
        email:email,
        dob:dob
      }
    )
  } catch (error) {
    console.log(error);
    
    
  }

}

export default {
  logInWithEmailAndPassword,
  SiginUpWithEmailIDandPassword,
  logoutWithFirebase,
  SubmitUser,
  AddUserAtSignUp
};
