# ORBE TECH — site empresarial

Site estático em HTML, CSS e JavaScript, sem instalação de dependências.

## Arquivos

- index.html: conteúdo, serviços, portfólio, simulador, guias, agendamento, orçamento e FAQ.
- styles.css: temas, componentes, animações e regras responsivas, organizados por seção.
- script.js: destino do WhatsApp, menu, tema, movimento, simulador e formulários.
- assets/logo-orbe-tech.png: logo original preservada.

## Como testar

Abra index.html no navegador ou use o servidor local do seu editor.

1. Em uma primeira visita, confira o tema escuro. Alterne pelo botão ◐ e recarregue: a escolha deve permanecer quando o navegador permitir armazenamento local.
2. Nos cards, clique em Solicitar orçamento. O serviço deve aparecer selecionado no simulador.
3. Marque serviços e características e use Revisar meu resumo. Solicitar cotação abre o WhatsApp com o resumo; o envio precisa ser confirmado no WhatsApp.
4. No formulário direto, preencha nome e serviço e deixe Sua ideia vazia. O contato deve continuar normalmente. Nome e serviço são obrigatórios.
5. Em agendamento, informe nome, uma data atual ou futura e período. O WhatsApp deve receber a preferência de reunião. Datas passadas são bloqueadas.
6. Abra os quatro guias e o FAQ. Use Tab e Enter para navegar; Escape fecha o menu móvel.
7. Verifique larguras próximas de 360, 768 e 1440 pixels nos dois temas. O menu móvel aparece até 900 pixels.
8. Use Pausar animações. Ative também a preferência do sistema por movimento reduzido: as órbitas e transições devem parar.
9. Confira que todos os contatos apontam para 5547992004663 e identificam a origem pelo site.

## Publicação e dependências

Publique somente o conteúdo desta pasta orbe-tech. A pasta .qa, no diretório superior, contém artefatos locais de revisão e não faz parte do site.

O simulador não calcula preços. Formulários não salvam dados em um servidor; apenas preparam uma mensagem para o visitante revisar e enviar pelo WhatsApp. É necessário acesso ao WhatsApp/app ou WhatsApp Web para concluir o contato.

Agendamento é uma solicitação, sem integração com calendário ou confirmação automática. Uma agenda em tempo real exigiria um serviço externo.

O blog contém quatro guias introdutórios locais. Novos artigos podem seguir a estrutura article > details em #blog. Um painel editorial exigiria um CMS ou backend; não há painel fictício.

SILTEC tem somente um espaço reservado. Publique imagens, links e descrição da entrega quando houver conteúdo real autorizado. Sistemas e automações estão identificados como evolução futura. A comparação de loja virtual orienta a escolha e permite consultar viabilidade.

As fontes usam Google Fonts, com fontes de sistema como alternativa. Não há bibliotecas de animação ou rastreamento. A logo original permanece no projeto.

Antes de publicar com um domínio definitivo, configure a URL canônica, og:url e sitemap usando o endereço real. Nenhum domínio, endereço físico, preço ou resultado comercial foi presumido.