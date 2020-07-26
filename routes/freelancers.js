const router = require('express').Router();
const faker = require('faker');

const Freelancer = require('../models/freelancer');
const Task = require('../models/task');
const Review = require('../models/review');
const Job = require('../models/job');

router.get('/freelancers', async (req, res) => {
    const user = req.app.get('user');
    const query = Freelancer.find();
    if (req.query.location) {
        query
            .where('nationality')
            .equals(req.query.location);
    }
    if (req.query.title) {
        query
            .where('tag_line')
            .equals(new RegExp(req.query.title), 'i');
    }
    const freelancers = await Freelancer.paginate(query, { limit: 5, page: parseInt(req.query.page) });
    return res.render('freelancers-list-layout-1', {
        data: {
            user,
            freelancers: freelancers.docs,
        },
        layout: false,
    });
});

router.get('/freelancers/:id', async (req, res) => {
    const user = req.app.get('user');
    const freelancer = await Freelancer.findById(req.params.id);
    freelancer.view_count++;
    await freelancer.save();
    const tasksDone = await Task.find({ freelancer_id: freelancer._id, status: 3 }).countDocuments();
    const tasks = await Task.find({ freelancer_id: freelancer._id }).sort({ created_at: 'desc' }).limit(5);
    const reviews = await Review.find({ reviewee: freelancer._id }).sort({ created_at: 'desc' }).limit(5).populate('task').exec();
    const jobs = await Job.find({ freelancer_id: freelancer._id }).sort({ created_at: 'desc' }).limit(3).populate('posted_by').exec();
    return res.render('single-freelancer-profile', {
        data: {
            user,
            freelancer,
            tasksDone,
            tasks,
            reviews,
            jobs,
        },
        layout: false,
    });
});

module.exports = router;