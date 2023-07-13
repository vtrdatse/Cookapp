import { Layout } from 'antd';


const LayoutNotAuth = ({ children }) => {
    return (
        <Layout>
            <div className='py-2 min-h-screen'>
                {children}
            </div>
        </Layout>
    );
}

export default LayoutNotAuth;