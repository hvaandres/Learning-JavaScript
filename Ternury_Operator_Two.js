function adminControls(user) {
    // if (user) {
    //    if(user.admin) {
    //      console.log('showing admin controls...');
    //  } else{
    //     console.log('you need to be an admin');
    // }
    // }else {
    // console.log('you need to be logged in');
    // }
    let response = user ? user.admin ? "Showing admin Controls...." : "You need to be an admin" : "Yo need to be login";
    console.log(response);
}

let useOne = {
    name: 'Kristine',
    admin: true
}
adminControls(userOne);

let userTwo = {
    name: 'Tiffany',
    admin: false
}

adminControls(userTwo);

let userThree = null

adminControls(userThree);



