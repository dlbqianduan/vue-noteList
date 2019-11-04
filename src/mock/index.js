import Mock from 'mockjs'
 
const data = []
for(var i = 0; i< 5;i++){
    data[i] = {
        'cParagraph':'@cparagraph(1)',
        'id|+1': i,
        'delShow':false
    }
}
 
Mock.mock('/api/test', 'post', data)
 
export default Mock;