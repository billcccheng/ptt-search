# PTT Study Abroad Search
This is a web based search engine for the Studyabroad board of the biggest BBS site, 
[PTT](https://en.wikipedia.org/wiki/PTT_Bulletin_Board_System), in Taiwan and 
is build in [react](https://facebook.github.io/react-native/). The website is deployed [here].(https://billcccheng.github.io/ptt-studyabroad-search/)

## Installation
First clone the repository.
```
git clone https://github.com/billcccheng/ptt-studyabroad-search.git
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

## Change Logs
12.05.2016
* Case Insensitive 
* Boolean Search 
* Can track all documents in study abroad as of 05/09/2017 
* Updates will be done every 6 months 
* Will search for 標題 and 內文 simultaneously 

5.08.2017
* Major revision: Changed to whole code base to react
* Add/Delete Query

5.10.2017
* Group results by year

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

## License
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
