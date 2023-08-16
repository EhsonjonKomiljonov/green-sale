import './loading.scss'
import LoadingImg from '../../assets/images/loading.svg'

export const Loading = () => {
  return (
    <div className='loading' >
      <img src={LoadingImg} alt="Loading..." />
    </div>
  )
}
