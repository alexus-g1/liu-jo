const userProfile = {
    name: "Alex",
    age: 22,
    posts: 3
}

const printInfo = ({name, posts}) => {
    if (posts) {
        console.log( `${name} has ${posts} posts`)
    }
}

printInfo(userProfile)