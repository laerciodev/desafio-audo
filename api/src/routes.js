const express = require('express');

const routes = express.Router();

routes.get('/exams', (req, res) => {

  const exams = [
    {
      id: 1,
      examName: 'Tumografia Computadorizada',
      examDate: '01-02-2018',
      nameDoctor: 'Raul'
    },
    {
      id: 2,
      examName: 'Mamografia',
      examDate: '01-02-2018',
      nameDoctor: 'Roberto'
    },
    {
      id: 3,
      examName: 'Ressonância Magnética',
      examDate: '01-02-2018',
      nameDoctor: 'Antônio'
    },
    {
      id: 4,
      examName: 'Ressonância Magnética',
      examDate: '01-02-2018',
      nameDoctor: 'Rogério'
    },

  ]

  return res.json(exams)
})

module.exports = routes;

