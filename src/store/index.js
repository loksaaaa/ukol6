import { configureStore } from '@reduxjs/toolkit'
import cal from './cal'
import lan from './lan'

export default configureStore({
  reducer: {
    cal:cal,
    lan:lan
  }
})

export { increment ,changeColor}  from './cal'
export { changeLanguage} from './lan'