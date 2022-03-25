const Students = require('../models').students;
const Cards = require('../models').cards;

const controller = {};

controller.getByDni = async (req, res) => {
  try {
    const student = await Students.findOne(
      {
        where: {
          dni: req.params.dni
        }
      }
    );
    if (student) {
      const card = await Cards.findOne({
        where: {
          student_id: student.id
        }
      });
      // console.log(card);
      return res.status(200).json({ ...student.dataValues, ...card.dataValues });
      // return res.status(200).json({ name: student.name, dni: student.dni, degree: student.degree, grade: student.grade, ...card });
    }
    return res.status(400).json({ msg: 'el usuario no existe' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Error del servidor' });
  }
};

controller.list = async (req, res) => {
  try {
    const students = await Students.findAll();
    return res.status(200).json(students);
  } catch (error) {
    return res.status(500).json({ msg: 'Error del servidor' });
  }
};

controller.create = async (req, res) => {
  try {
    const body = { ...req.body };

    const exists = await Students.findOne({
      where: {
        name: body.name
      }
    });

    if (!exists) {
      const student = await Students.create({
        name: body.name,
        dni: body.dni,
        degree: body.degree,
        grade: body.grade,
        year_admission: body.year_admission,
        password: body.password
      });
      console.log('paso tranqui');
      if (student) {
        const card = await Cards.create({
          student_id: student.id,
          about: body.about,
          sex: body.sex,
          phone: body.phone,
          knowledges: body.knowledges,
          social: body.social,
          academic: body.academic,
          birth_date: body.birth_date
        });
        return res.status(200).json({ ...student, ...card });
      }
    }
    return res.status(400).json({ msg: 'El usuario ya existe' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Error del servidor' });
  }
};

module.exports = controller;
