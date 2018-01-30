# react-passport

* [strategies source](/src/server/api/auth)
* [providers setup](/config/auth.prod.json)
* [nginx setup](/nginx)


## strategies used

<img src="/src/images/screenshot.png" align="right" height="330" width="330">

* [local](https://github.com/jaredhanson/passport-local)
* [facebook](https://github.com/jaredhanson/passport-facebook)
* [twitter](https://github.com/jaredhanson/passport-twitter)
* [instagram](https://github.com/jaredhanson/passport-instagram)
* [linkedin](https://github.com/jaredhanson/passport-linkedin)
* [vkontakte](https://github.com/stevebest/passport-vkontakte)
* [reddit](https://github.com/slotos/passport-reddit)
* [flickr](https://github.com/johnnyhalife/passport-flickr)
* [pinterest](https://github.com/analog-nico/passport-pinterest)
* [stack-exchange](https://github.com/mooyoul/passport-stack-exchange)
* [github](https://github.com/jaredhanson/passport-github)
* [google](https://github.com/jaredhanson/passport-google-oauth)
* [dropbox](https://github.com/florianheinemann/passport-dropbox-oauth2)

## installation

```
$ git clone https://github.com/slopen/react-passport.git
$ cd react-passport
$ npm i
```

## production

```
$ npm run production
```

## development

requires `auth.dev.json` in `config` folder

```
$ npm run dev
```
