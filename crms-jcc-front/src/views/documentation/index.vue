<template>
  <div class="app-container documentation-container">
    <a class="document-btn" target="_blank" href="https://github.com/dktunited/">githubRepository</a>
    <a class="document-btn" target="_blank" href="http://52.80.44.179:9080/users/sign_in">gitlubRepository</a>
    <a class="document-btn" target="_blank" href="https://sonarcloud.io/welcome">sonar</a>
    <a class="document-btn" target="_blank" href="https://id.atlassian.com/login?continue=https%3A%2F%2Fdecathlon.atlassian.net%2Flogin%3FredirectCount%3D1%26dest-url%3D%252Fsecure%252FRapidBoard.jspa%253FrapidView%253D1441%26application%3Djira&application=jira">jira</a>
    <a class="document-btn" target="_blank" href="https://swimlanes.io/u/vmb_XHIVH">shiphub-order-flow</a>
    <a class="document-btn" target="_blank" href="https://drive.google.com/drive/folders/1Dm_cFZHSYCh9yoDN1TwCkLPPH55QRNxP">Test-case</a>
    <a class="document-btn" target="_blank" href="https://mail.google.com/mail/u/0/#inbox">email</a>
    <a class="document-btn" target="_blank" href="https://docs.google.com/drawings/d/1_I1DuAosdy8nLfArzX9Hcc1SA2u1JSEPt4UuPAKR7RA/edit">stock-movement-process</a>
    <a class="document-btn" target="_blank" href="https://drive.google.com/drive/folders/1vAa7n7Kf_JMXFRA2lSYXjEsxrMuFPZW8">shiphub-release-manager-dashboard</a>
    <a class="document-btn" target="_blank" href="https://docs.google.com/spreadsheets/d/15dnLggK-K4oWymjD3P0bNVMDwFH5muO2dG5Q1wjX0Yo/edit?ts=6093b426#gid=0">shiphub-ftp</a>
    <a class="document-btn" target="_blank" href="https://docs.google.com/spreadsheets/d/1-5HxShaXjbQKUGBoU6_exWwP9dL6ZotzdlqCiT2Omak/edit#gid=943177444">shiphub-workload</a>
    <a class="document-btn" target="_blank" href="https://docs.google.com/spreadsheets/d/1pySOA_nUL8GruXUwEYsuJF9CuQvJtXBov4V0il0ZLWM/edit#gid=1649037555">workload-time</a>
    <a class="document-btn" target="_blank" href="https://www.vaultproject.io/docs">vault_doc</a>
    <div  class="app-container documentation-container">
      <dropdown-menu class="document-btn" :items="carrierApiList" title="carrierApi" />
      <dropdown-menu class="document-btn" :items="pickingBusinessList" title="pickingBusiness" />
      <dropdown-menu class="document-btn" :items="shippingBusinessList" title="shippingBusiness" />
      <dropdown-menu class="document-btn" :items="webBusinessList" title="webBusiness" />
      <dropdown-menu class="document-btn" :items="webLoginPageList" title="webLoginPage" />
      <dropdown-menu class="document-btn" :items="decathlonList" title="Documentation" />
      <dropdown-menu class="document-btn" :items="articleList" title="系列文章" />
      <dropdown-menu class="document-btn" :items="toolList" title="toolList" />
    </div>
  </div>

</template>

<script>
import DropdownMenu from '@/components/Share/DropdownMenu'

export default {
  name: 'Documentation',
  components: { DropdownMenu },
  data() {
    return {
      articleList: [
        { title: '基础篇', href: 'https://juejin.im/post/59097cd7a22b9d0065fb61d2', description: '学习基础' },
        { title: '登录权限篇', href: 'https://juejin.im/post/591aa14f570c35006961acac' },
        { title: '实战篇', href: 'https://juejin.im/post/593121aa0ce4630057f70d35' },
        { title: 'vue-admin-template 篇', href: 'https://juejin.im/post/595b4d776fb9a06bbe7dba56' },
        { title: 'v4.0 篇', href: 'https://juejin.im/post/5c92ff94f265da6128275a85' },
        { title: '自行封装 component', href: 'https://segmentfault.com/a/1190000009090836' },
        { title: '优雅的使用 icon', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（上）', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（下）', href: 'https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc' }
      ],
      // eslint-disable-next-line no-mixed-spaces-and-tabs
	    decathlonList: [
        { title: '搭建环境-LocalEnvironmentBuild', href: 'https://docs.google.com/spreadsheets/d/1k1-gvcjmWPUsuWRxYhgaZuzuGsOGzuB2Lmj-YJs3MDU/edit#gid=0' },
        { title: '架构图-Architeture', href: 'https://docs.google.com/drawings/d/1GUs9JsV97gtLaOA5maqWbD-_1ZVL8EQGEEvkS1w5ICk/edit' },
        { title: '架构图-Architeture-new', href: 'https://docs.google.com/drawings/d/1JFU7KqGy7CQiypMPw3sz9w7juLJURcz3_BA0XdNMxuw/edit' },
        { title: 'DataBase', href: 'https://drive.google.com/drive/folders/1KAvc_LevD54BMumChueCK-TiBPFv0qeW' },
        { title: 'API', href: 'https://drive.google.com/drive/folders/1KYln9bfRJ83Vgh1T7nX1ibqDaxgFP3lp' },
        { title: 'Test-case', href: 'https://drive.google.com/drive/folders/1Dm_cFZHSYCh9yoDN1TwCkLPPH55QRNxP' },
        { title: 'Road-map', href: 'https://docs.google.com/spreadsheets/d/1OuRTlSlDWq_A2O-VmZxw1EoDgsJM7vgjilzInNuzms4/edit#gid=0' },
        { title: 'Processon', href: 'https://drive.google.com/drive/folders/1vAa7n7Kf_JMXFRA2lSYXjEsxrMuFPZW8' },
        { title: 'pubulish doc', href: 'https://docs.google.com/document/d/1kQpKwfdh5n1Jy8_3xgvZZK37Rh6aEK8oLCqQblrPzuM/edit' },
        // eslint-disable-next-line no-mixed-spaces-and-tabs
	    ],
      carrierApiList: [
        { title: 'SF-Qiao', href: 'https://docs.google.com/spreadsheets/d/1iZ3batwTkr3id0Zlf0jxDV3qTzOshemCI0kr-jyUVvE/edit?usp=sharing' },
        { title: 'Eleme', href: 'https://docs.google.com/spreadsheets/d/1iZ3batwTkr3id0Zlf0jxDV3qTzOshemCI0kr-jyUVvE/edit?usp=sharing' },
        { title: 'Samecity', href: 'https://docs.google.com/spreadsheets/d/1Q3x6U27nUCswnV0rkKE25CYwlPO_3XJVVvJR0RXBDHU/edit#gid=0' },
        { title: 'Tmalldss', href: 'https://docs.google.com/spreadsheets/d/1xLuO1zs7s2GneqI4C45WRnKL9M_4d7iCeR20FPJiTxU/edit#gid=0' },
        { title: 'Tmall Tongchenggou', href: 'https://docs.google.com/spreadsheets/d/1nDOvQUb-9UHEO5DTkO-Poe5euOYYRgj-sWN8CRFBuKg/edit#gid=0' },
        { title: 'TKuaidi100', href: 'https://docs.google.com/spreadsheets/d/1TxpqTI3a8QL007DalcX3ma6_dUTiZ3oNzNlQzxooUD4/edit#gid=0' }
      ],
      pickingBusinessList: [
        { title: 'Create Order', href: 'https://docs.google.com/document/d/1cL_sj5q22-PznawX7tBbRzbe5QQczifAOXFKB43pmbk/edit' },
        { title: 'Cancel Order', href: 'https://docs.google.com/document/d/1-ncbEZpHtuY1qlWWuMq3xGRJoqfVEUB3aR3IQ80PXa4/edit' },
        { title: 'Reject Order', href: 'https://docs.google.com/document/d/17uw395FAxjD7-C9Es9aoGna41c__Q7oSSu1wpr8sMSc/edit' }
      ],
      shippingBusinessList: [
        { title: 'DO Validate', href: 'https://docs.google.com/document/d/1Y8XL74davP8dV_ToiP8um_zhcZOG9LkN2-2yaFVlPPw/edit' },
        { title: 'Callback OMS', href: 'https://docs.google.com/document/d/13brcuN_eClhqkGzhjRs_iyolvf7TSz4yQyewFDbOQQo/edit#' },
        { title: 'Print ShoppingList', href: 'https://docs.google.com/document/d/1p1b-UsiVPv35tynDMaAScav0JHXP0NQNGuuYL8TxJN0/edit' },
        { title: 'Check Availability', href: 'https://docs.google.com/document/d/1j1zIUyrq9316bUhKOeVbL7SCJ1P01vv-sc5eZ9GeUso/edit' },
        { title: 'Reduce Stock', href: 'https://docs.google.com/document/d/1B_ML9Oo2J_1yHl8dKq5GgJxR_PWGE_2P0sV08j38qOU/edit' },
        { title: 'Track Delivery', href: 'https://docs.google.com/document/d/1STYCz-Vxd8jLtFynuOz9oU74hAWVS88DRDYztpEjWoY/edit' },
        { title: 'Cloud Printer', href: 'https://docs.google.com/spreadsheets/d/1ud9wNN-37PzHaPulrGGxfRs6yzSdGd96Wpv7WkOohiw/edit#gid=0' }
      ],
      webBusinessList: [
        { title: 'Dashboard', href: 'https://docs.google.com/document/d/1k-_pekPawLOhXRgpAZtJq_CBCdbb2Xz6ALYxker5peQ/edit' },
        { title: 'Picking Information', href: 'https://docs.google.com/document/d/1z8VGSqXAFeNSmzEPGlRa32sNn8KOQgOU9qiFCN0w6Mo/edit' },
        { title: 'To Ship List', href: 'https://docs.google.com/document/d/1qF1IikvbczTWSPG4vYNBY-_iQXwwBh0YjroOMkhOZGg/edit' }
      ],
      webLoginPageList: [
        { title: 'Frontend HomePage PR', href: 'https://shiphub-asia.subsidia.org/homePage' },
        { title: 'Admin HomePage', href: 'https://shiphub-asia-admin.subsidia.org/homePage' },
        { title: 'prepare HomePage PP', href: 'https://shiphub-asia.preprod.subsidia.org/homePage' }
      ],
      toolList: [
        { title: 'Jenkins', href: 'https://jenkins-china.subsidia.org/job/shiphub' },
        { title: 'grafana', href: 'https://grafana-cn.dktapp.cloud/d/80Tr-qxGd/availability-new' },
        { title: 'Rancher pp', href: 'http://rancher.preprod.subsidia.org/env/1a216974/apps/stacks' },
        { title: 'Rancher pr', href: 'http://rancher.subsidia.org/login?timedOut=truetrue' },
        { title: 'Kibana elk pp', href: 'http://kibana-akscn.pp.dktapp.cloud/login?next=%2Fs%2Flocal-project%2Fapp%2Fkibana#/discover?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(columns:!(_source),filters:!((\'$state\':(store:appState),meta:(alias:!n,disabled:!f,index:\'5d6caaf0-5842-11ea-9c95-1d81470ac761\',key:module_Name,negate:!f,params:(query:shiphub-picking,type:phrase),type:phrase,value:shiphub-picking),query:(match:(module_Name:(query:shiphub-picking,type:phrase))))),index:\'39b1fb70-6457-11eb-9562-c773c6612836\',interval:auto,query:(language:kuery,query:\'\'),sort:!(\'@timestamp\',desc))' },
        { title: 'Kibana elk pr', href: 'http://kibana-cn.dktapp.cloud/login?next=%2Fapp%2Fkibana#/discover?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-30d,mode:quick,to:now))&_a=(columns:!(_source),index:\'31cb88c0-a777-11e9-aa3c-97922f3c6423\',interval:auto,query:(language:lucene,query:\'2001150010729\'),sort:!(\'@timestamp\',desc))' },
        { title: 'Kafka Web Manager pr', href: 'http://de-kafka-mg.dktapp.cloud/' },
        { title: 'Kafka Web Manager pp', href: 'http://de-kafka-mg.pp.dktapp.cloud/' },
        { title: 'vault', href: 'https://vault-china.dktapp.cloud/ui/vault' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.documentation-container {
  margin: 50px;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-cotent: flex-start;

  .document-btn {
    flex-shrink: 0;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    padding: 0 16px;
    margin: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
