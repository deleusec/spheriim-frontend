import React from 'react';

class HeaderCards extends React.Component {
    render() {
        const {svg, title} = this.props;

        return (
            <div className="flex items-center gap-4 mb-2">
                <div className='bg-primary h-9 w-9 rounded-xl flex justify-center items-center'>                
                    <img src={svg} alt="picto" className='h-[18px] w-[18px]'/>
                </div>
                <h3 className="text-xl font-medium">{title}</h3>
            </div>
        );
    }
}


export default HeaderCards;