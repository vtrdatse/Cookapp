import { Layout } from 'antd';


const LayoutNotAuth = ({ children }) => {
    return (
        <Layout>
            <div className='p-2 min-h-screen flex justify-center items-center '>
                {children}
            </div>
        </Layout>
    );
}

export default LayoutNotAuth;