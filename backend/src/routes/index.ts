import {Router} from 'express';

const router = Router(); //crea con express un enrutador --> es un objeto para poner dentro tus rutas o las url del servidor

import {createStudent,getStudents,getStudent, deleteStudent, updateStudent} from '../controllers/student.controller'
import {createSubject,getSubjects,getSubject, deleteSubject, updateSubject} from '../controllers/subject.controller'

router.route('/students')
    .get(getStudents)
    .post(createStudent)

router.route('/students/:id')
    .get(getStudent)
    .delete(deleteStudent)
    .put(updateStudent)

router.route('/subjects')
    .get(getSubjects)
    .post(createSubject)

router.route('/subjects/:id')
    .get(getSubject)
    .delete(deleteSubject)
    .put(updateSubject)

export default router;