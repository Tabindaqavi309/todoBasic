

//const bodyParser = require('body-parser');
//const app = require('./app');
const express = require('express');
const router = express.Router();
let k = 11;


const object = {
    1: 'Develop a new feature for the web application',
    2: 'Buy a helmet for cycling',
    3: 'Have lunch with mom on friday',
    4: 'Analyze the survey result',
    5: 'Deliver the company accounts on day 30',
    6: 'Publish an article on Monday',
    7: 'Save a music CD to have in the car',
    8: 'Call dad for his birthday',
    9: 'I would like to visit New Zealand',
    10: 'Learn to use skretch'
};


router.get('/', (req, res, result) => {


    res.status(200).json(object);
});
router.post('/', (req, res, result) => {
    let i;
    i = req.body.task;

    object[k++] = i;

    res.status(201).json(object);
    console.log(k);

});
router.patch('/:taskId', (req, res) => {
    let ol = Object.keys(object);
    let length = ol[ol.length - 1];
    parseInt(length);
    console.log(length);
    const id = req.params.taskId;

    let f = false;
    for (var i = 1; i <= length; i++) {
        if (i == id) {
            //console.log("if" + i)
            var index;
            var num = i.toString();
            console.log(num);
            index = req.body.task;
            object[num] = index;
            f = true;
            break;
        }

    }
    if (f == true)
        res.status(200).json(object);
    else
        res.status(500).json({
            message: 'Wrong Id'
        });

})
router.delete('/:taskId', (req, res) => {
    let ol = Object.keys(object);
    let length = ol[ol.length - 1];
    parseInt(length);
    console.log(length);
    const id = req.params.taskId;
    let flag = false;
    for (var i = 1; i <= length; i++) {

        if (i == id) {

            var num = i.toString();
            delete object[num];
            flag = true;
            break;
        }


    }
    if (flag == true)
        res.status(200).json(object);
    else
        res.status(500).json({
            message: 'Wrong Id'
        });
});
router.get('/:taskId', (req, res) => {
    let ol = Object.keys(object);

    let length = ol[ol.length - 1];
    parseInt(length);
    console.log(length);
    const id = req.params.taskId;
    let f1 = false;
    for (var i = 1; i <= length; i++) {

        if (i == id) {

            var num = i.toString();
            f1 = true;
            break;
        }


    }
    if (f1 == true)
        res.status(200).json(object[num]);
    else
        res.status(500).json({
            message: 'Wrong Id'
        });

});
module.exports = router;