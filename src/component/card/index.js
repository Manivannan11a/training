import { Card } from 'antd';

const CardName =({title, content})=>{

    return(
        <Card title={title}>
        {content}
        </Card>

    );
}

export default CardName;