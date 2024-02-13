interface TeacherProps {
    params: { id: string };
}

export default function Teacher({ params } : TeacherProps ) {
    console.log(params.id);
    
    return (
        <h1>Hello World</h1>
    );
}