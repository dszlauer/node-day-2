module.exports = {
  getStudents: (req, res, next) => {
    // 'next' is middleware, like a return
    const db = req.app.get("db"); //calling back to index.js where we set app.set('db', db), this access the database for use
    db.get_all_students().then(students => {
      res.status(200).json(students);
    });
  },

  postStudent: (req, res, next) => {
    const db = req.app.get("db");
    const { name, cohort, campus } = req.body;

    // create table students(
    // id serial primary key
    // , name text not null
    // , cohort integer not null
    // , campus text references campus_data(campus)
    // );

    db.post_student([name, cohort, campus])
      .then(students => {
        res.status(200).json(students);
      })
      .catch(err => res.json(err.detail));
  },

  updateStudent: (req, res, next) => {
    const db = req.app.get("db");
    const { student_id, cohort } = req.params;

    // we are passing sutdent_id and cohort to our database file update_student.sql
    db.update_student([student_id, cohort])
      .then(students => {
        res.status(200).json(students);
      })
      .catch(err => res.json(err.detail));
  },

  deleteStudent: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_student([id])
      .then(students => {
        res.status(200).json(students);
      })
      .catch(err => res.json(err.detail));
  }
};
