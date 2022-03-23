import {$api} from "./index"
import store from '../store.js'

export const addAuthor = async(
  name,
  surname,
  patronymic,
  city,
  adress,
  posteCode,
  education,
  specialtyCode,
  work,
  position,
  academicDegree
  ) => {
    try {
        const id = store.state.user.id
        const response = await $api.post(`/author/${id}`,{
          name,
          surname,
          patronymic,
          city,
          adress,
          posteCode,
          education,
          specialtyCode,
          work,
          position,
          academicDegree
        })
        return response
    }catch (e){
        console.log(e)
    }

}