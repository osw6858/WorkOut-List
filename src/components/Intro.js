import React from 'react';

const Intro = () => {
  return (
    <div className="w-full bg-slate-300 ">
        <div className='p-5'>
      <h1 className="text-3xl font-bold text-center mb-8">운동 기록 홈페이지</h1>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-xs mx-3 bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-lg font-bold mb-4">1. 타이머</h2>
          <p className='text-sm'>운동 시간을 측정할때 사용하세요.</p>
        </div>

        <div className="max-w-xs mx-3 bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-lg font-bold mb-4">2. 운동 추가</h2>
          <p className='text-sm'>추가하고 싶은 운동을 운동종목에 입력하고 추가 버튼을 누르세요.</p>
        </div>

        <div className="max-w-xs mx-3 bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-lg font-bold mb-4">3. 세트 추가/삭제</h2>
          <p className='text-sm'>추가한 운동에서 세트를 추가하고 삭제할 수 있습니다.</p>
        </div>

        <div className="max-w-xs mx-3 bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-lg font-bold mb-4">4. 저장</h2>
          <p className='text-sm'>모든 운동이 끝났다면 타이머를 멈추고 하단에 저장 버튼을 누르세요.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Intro;
