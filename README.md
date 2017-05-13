# PTT Search
This is a web based search engine for PTT boards of the biggest BBS site, 
[PTT](https://en.wikipedia.org/wiki/PTT_Bulletin_Board_System), in Taiwan and 
is build in [react](https://facebook.github.io/react-native/). The website is deployed [here](https://billcccheng.github.io/ptt-search/).

## Installation
First clone the repository.
```
git clone https://github.com/billcccheng/ptt-search.git
```

Then npm install to install all the required packages. After you have
all the packages installed, you can `npm run start` to play around with you app on `port 8080`.

```
npm install
npm run start
```
If you want to change your port to 8000, just go to `package.json` and change `"start":...` to

```
"start": "PORT=8000 webpack-dev-server --hot --open --host 0.0.0.0"
```

## The Backend Server
* All the logic and searching of the app is loaded on a heroku server. All the source code of the heroku server can be
found [here](https://github.com/billcccheng/ptt-search-server)

## Change Logs
12.05.2016
* Case Insensitive 
* Boolean Search 
* Can track all documents in study abroad as of 05/09/2017 
* Updates will be done every 6 months 
* Will search for 標題 and 內文 simultaneously 

5.08.2017
* Major revision: Changed whole code base to react
* Add/Delete Query

5.10.2017
* Group results by year

5.13.2017
* Stand up a server to process all the searching to minimize memory usage

## Future Update
* Will add different boards
* Will have TOEFL GRE analysis for studyabroad board

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :smile:
6. All contributions are **welcomed** :blush:!

## Credits
Thanks to 
* [KyleAMathews](https://github.com/KyleAMathews/react-spinkit) for the wonderful loading icons.
* [Gosha Arinich](https://goshakkk.name/array-form-inputs/) for the tutorial on dynamic inputs.
* [JedWatson](https://github.com/JedWatson/react-select) for react dropdown/select library.

## License
MIT License
Copyright (c) [2017] [Bill(Chun-Chan) Cheng]
