
        
        function Animais({objeto = {}}){
        return (
            <div>
                <p>{objeto.nome}</p>
                <p>{objeto.usuario}</p>
                <p>{objeto.descricao}</p>
            </div>
            )
            }

    export async function getStaticPaths() {
        const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
        const repo = await res.json()
        const objeto = await repo;
        const paths = objeto.map((objeto, index) => {
        return {params:{nome:String(index)}};
        });
        return {
        paths,
        fallback: false,
        };
        }

        export const getStaticProps = (async (context) => {
            const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
            const repo = await res.json()
            const objeto = await repo[context.params.nome];
            return {
            props: {objeto}
            }
            })
            
        
export default Animais;


    