# LungVichai 
#### Start Project Date : 29-1-2019
---
### วิธีเพิ่ม bootstrap 
1. npm install bootstrap@4 jquery --save
2. go to file "angular.json"
3. add location of bootstrap both "styles" and "scripts"
```
"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css" <<<<< here

            ],
"scripts": [
            "node_modules/jquery/dist/jquery.min.js",             <<<<< here
            "node_modules/bootstrap/dist/js/bootstrap.min.js"]    <<<<< here
```
[ลิ้ง stackOverflow](https://stackoverflow.com/questions/50290197/how-to-add-bootstrap-in-angular-6-project "link")
---
### Other
- เพิ่ม FormModule
> npm i @angular/forms
