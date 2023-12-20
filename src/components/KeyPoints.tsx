import React from 'react';

class KeyPoints extends React.Component {
    render() {
        const {li} = this.props;

        return (
            <li className="text-primary list-disc ml-4">{li}</li>
        )
    }
}

export default KeyPoints;