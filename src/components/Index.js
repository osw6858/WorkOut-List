import DateTime from "./DateTime";
import Weather from "./Weather";
import { Button} from 'antd';

const Index = () => {
    return (
      <div>
        <div className=" bg-gray-200 dark:bg-slate-700 rounded-lg my-11">
         <DateTime></DateTime>
         <Weather></Weather>
        </div>
        <div className='flex justify-center my-10'>
           <Button type="primary" size="large" className="mx-10 bg-blue-900 border">유산소</Button>
           <Button type="primary" size="large" className="mx-10 bg-blue-900 border">웨이트</Button>
         </div>
      </div>
    )
}

export default Index;