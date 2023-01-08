const express=require('express')

const [getGoals, setGoal,updateGoal,deleteGoal]= require('../controlers/goalControler')

const router=express.Router();
router.route('/').get(getGoals).post(setGoal);
router.route('/:id').delete(deleteGoal).put(updateGoal)

module.exports=router;