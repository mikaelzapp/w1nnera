... existing code ...

## Passo 1: Configurar Regras do Firestore

1. Acesse o [Console do Firebase](https://console.firebase.google.com/)
2. Selecione seu projeto
3. No menu lateral, clique em **Firestore Database**
4. Clique na aba **Regras** (Rules)
5. Cole as regras abaixo e clique em **Publicar** (Publish)

```firestore
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // <CHANGE> Removido UID hardcoded da documentação
    // Função auxiliar para verificar se é admin via custom claims
    function isAdmin() {
      return request.auth != null && request.auth.token.admin == true;
    }
    
... existing code ...
