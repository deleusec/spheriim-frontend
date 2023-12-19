import React from 'react';

class HeaderCards extends React.Component {
    render() {
        const {svg, title} = this.props;

        return (
            <div className="flex gap-4">
                <div className='bg-primary h-9 w-9 rounded-xl flex justify-center items-center'>                
                    <img src={svg} alt="picto" className='h-[18px] w-[18px]'/>
                </div>
                <h3 className="">{title}</h3>
            </div>
        );
    }
}


export default HeaderCards;