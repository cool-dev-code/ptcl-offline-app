//Note: The options array initialized in menu.html follows
//      the MENU_OPTION order defined here.	Both sides must
//      be in the same order.
var MENU_OPTION_USER              = 0;
var MENU_OPTION_STANDARD          = 1;
var MENU_OPTION_PROTOCOL          = 2;
var MENU_OPTION_FIREWALL          = 3;
var MENU_OPTION_NAT               = 4;
var MENU_OPTION_IP_EXTENSION      = 5;
var MENU_OPTION_WIRELESS          = 6;
var MENU_OPTION_VOICE             = 7;
var MENU_OPTION_SNMP              = 8;
var MENU_OPTION_UPNP              = 9;
var MENU_OPTION_DDNSD             = 10;
var MENU_OPTION_SNTP              = 11;
var MENU_OPTION_EBTABLES          = 12;
var MENU_OPTION_BRIDGE            = 13;
var MENU_OPTION_TOD               = 14;
var MENU_OPTION_SIPROXD           = 15;
var MENU_OPTION_DHCPEN            = 16;
var MENU_OPTION_QOS               = 17;
var MENU_OPTION_PORTMAP           = 18;
var MENU_OPTION_IPP               = 19;
var MENU_OPTION_WIRELESS_SES      = 20;
var MENU_OPTION_RIP               = 21;
var MENU_OPTION_IPSEC             = 22;
var MENU_OPTION_CERT              = 23;
var MENU_OPTION_WL_QOS            = 24;
var MENU_OPTION_TR69C             = 25;
var MENU_OPTION_VDSL              = 26;
var MENU_OPTION_URLFILTER         = 27;
var MENU_OPTION_IPV6_SUPPORT      = 28;
var MENU_OPTION_IPV6_ENABLE       = 29;
var MENU_OPTION_DNSPROXY          = 30;
var MENU_OPTION_POLICY_ROUTING    = 31;
var MENU_OPTION_OMCI              = 32;
var MENU_OPTION_CHIPID            = 33;
var MENU_OPTION_WIRELESS_NUM_ADAPTOR =34;
var MENU_OPTION_DIAG_P8021AG      =35;
var MENU_OPTION_ETHWAN            =36;
var MENU_OPTION_PTMWAN            =37;
var MENU_OPTION_PWRMNGT           =39;
var MENU_OPTION_VOICE_NTR         =40;
var MENU_OPTION_ATMWAN            =41;
var MENU_OPTION_MOCAWAN           =42;
var MENU_OPTION_VOICE_DECT        =43;
var MENU_OPTION_DSL_BONDING       =44;
var MENU_OPTION_MULTICAST         =45;
var MENU_OPTION_VPN               =46;
var MENU_OPTION_STORAGESERVICE    =47;
var MENU_OPTION_SUPPORT_MOCA      =48;
var MENU_OPTION_STANDBY           =49;
var MENU_OPTION_DLNA              =50;
var MENU_OPTION_WIRELESS_WAPI_AS  =51;
var MENU_OPTION_AUTODETECTION	  =52;
var MENU_OPTION_GPONWAN           =53;
var MENU_OPTION_POLICE_ENABLE     =54;
var MENU_OPTION_OSGI_JVM          =55;
var MENU_OPTION_EPONWAN           =56;
var MENU_OPTION_SAMBA             =57;
var MENU_OPTION_BMU               =58;
var MENU_OPTION_BUILD_VDSL        =59;
var MENU_OPTION_SUPPORT_LAN_VLAN  =60;
var MENU_OPTION_OPTICAL          = 61;
var MENU_OPTION_ACCESS_CONTROL    =62;
var MENU_OPTION_IPADDR_ACCESSCTRL = 63;
var MENU_OPTION_DARE_MULTI_NAT    =64; /* dare qiangzht add */
var MENU_OPTION_DARE_DOS          =65;
var MENU_OPTION_DARESTORAGESERVICE	=66;  //shiyan add samba function
var MENU_OPTION_3G_DONGLE	  =67;
var MENU_OPTION_3G_FAILOVER	  =68;
var MENU_OPTION_DARE_PING_TRACE    =69;
var wlItemsCgiCmd = new Array(
 	                    'http://192.168.10.1/wlswitchinterface0.wl',
                           'http://192.168.10.1/wlswitchinterface1.wl',
                           'http://192.168.10.1/wlswitchinterface2.wl',
                           'http://192.168.10.1/wlswitchinterface3.wl'
                          );

 var wlmenuTitle = new Array(
 	                    'wl0',
                           'wl1',
                           'wl2',
                           'wl3'
                          );
function menuAdmin(options) {
   var std = options[MENU_OPTION_STANDARD];
   var proto = options[MENU_OPTION_PROTOCOL];
   var firewall = options[MENU_OPTION_FIREWALL];
   var ipExt = options[MENU_OPTION_IP_EXTENSION];
   var wireless = options[MENU_OPTION_WIRELESS];
   var voice = options[MENU_OPTION_VOICE];
   var snmp = options[MENU_OPTION_SNMP];
   var ddnsd = options[MENU_OPTION_DDNSD];
   var sntp = options[MENU_OPTION_SNTP];
   var ebtables = options[MENU_OPTION_EBTABLES];
   var bridge = options[MENU_OPTION_BRIDGE];
   var tod = options[MENU_OPTION_TOD];
   var QosEnabled = options[MENU_OPTION_QOS];
   var vlanconfig = options[MENU_OPTION_PORTMAP];
   var ipp = options[MENU_OPTION_IPP];
   var dlna = options[MENU_OPTION_DLNA];
   var wireless_ses = options[MENU_OPTION_WIRELESS_SES];
   var rip = options[MENU_OPTION_RIP];
   var ipsec = options[MENU_OPTION_IPSEC];
   var certificate = options[MENU_OPTION_CERT];
   var wlqos = options[MENU_OPTION_WL_QOS];
   var tr69c = options[MENU_OPTION_TR69C];
   var ipv6Support = options[MENU_OPTION_IPV6_SUPPORT];
   var ipv6Enable = options[MENU_OPTION_IPV6_ENABLE];
   var upnp = options[MENU_OPTION_UPNP];
   var urlfilter = options[MENU_OPTION_URLFILTER];
   var dnsproxy = options[MENU_OPTION_DNSPROXY];
   var pr = options[MENU_OPTION_POLICY_ROUTING];
   var omci = options[MENU_OPTION_OMCI];
   var numWl = options[MENU_OPTION_WIRELESS_NUM_ADAPTOR];
   var p8021ag = options[MENU_OPTION_DIAG_P8021AG];
   var ethwan = options[MENU_OPTION_ETHWAN];
   var ptm = options[MENU_OPTION_PTMWAN];
   var pwrmngt = options[MENU_OPTION_PWRMNGT];
   var standby = options[MENU_OPTION_STANDBY];
   var voiceNtr = options[MENU_OPTION_VOICE_NTR];
   var atm = options[MENU_OPTION_ATMWAN];
   var mocawan = options[MENU_OPTION_MOCAWAN];
   var gponwan = options[MENU_OPTION_GPONWAN];
   var eponwan = options[MENU_OPTION_EPONWAN];
   var dect = options[MENU_OPTION_VOICE_DECT];
   var dslbonding = options[MENU_OPTION_DSL_BONDING];
   var multicast = options[MENU_OPTION_MULTICAST];
   var vpn = options[MENU_OPTION_VPN];
   var storageservice = options[MENU_OPTION_STORAGESERVICE];
   var sambaservice = options[MENU_OPTION_SAMBA];
   var mocaCfg = options[MENU_OPTION_SUPPORT_MOCA];
   var wireless_wapi = options[MENU_OPTION_WIRELESS_WAPI_AS];
   var autoDetection = options[MENU_OPTION_AUTODETECTION];
   var policeEnable = options[MENU_OPTION_POLICE_ENABLE];
   var accessControl = options[MENU_OPTION_ACCESS_CONTROL];
   var ipaddr_accctrl = options[MENU_OPTION_IPADDR_ACCESSCTRL];
   var multinat = options[MENU_OPTION_DARE_MULTI_NAT];/*dare qiangzht add*/
   var dos = options[MENU_OPTION_DARE_DOS];
   var isDsl = 0;
   //var osgi_jvm = options[MENU_OPTION_OSGI_JVM];
   var bmu = options[MENU_OPTION_BMU];
   var buildVdsl = options[MENU_OPTION_BUILD_VDSL];
   var lanvlanEnable = options[MENU_OPTION_SUPPORT_LAN_VLAN];
   var siproxd = options[MENU_OPTION_SIPROXD];
   var darestorageservice = options[MENU_OPTION_DARESTORAGESERVICE];  //shiyan add samba function
   var web_3g = options[MENU_OPTION_3G_DONGLE];    
   var web_3g_failover=options[MENU_OPTION_3G_FAILOVER];
   var ping_trace = options[MENU_OPTION_DARE_PING_TRACE];
	// Configure advanced setup/layer 2 interface 
	if (atm == '1' ) {
		isDsl = 1;
		nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/dslatm.cmd'));
		nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'http://192.168.10.1/dslatm.cmd'));
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_DSL_ATM_INTERFACE), 'http://192.168.10.1/dslatm.cmd'));		
	} 
	if (ptm == '1') {
		isDsl = 1;
		if (atm != '1') {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/dslptm.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'http://192.168.10.1/dslptm.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_DSL_PTM_INTERFACE), 'http://192.168.10.1/dslptm.cmd'));		
	}	
	if (gponwan == '1' ) {
		if (!(atm == '1' || ptm == '1')) {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/gponwan.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'http://192.168.10.1/gponwan.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_GPONWAN_INTERFACE), 'http://192.168.10.1/gponwan.cmd'));
	}
	if (eponwan == '1' ) {
		if (!(atm == '1' || ptm == '1') || gponwan == '1' ) {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/eponwan.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'http://192.168.10.1/eponwan.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_EPONWAN_INTERFACE), 'http://192.168.10.1/eponwan.cmd'));
	}	
	if (ethwan == '1' ) {
		if (!(atm == '1' || ptm == '1' || gponwan == '1' || eponwan == '1')) {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/ethwan.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'http://192.168.10.1/ethwan.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_ETH_INTERFACE), 'http://192.168.10.1/ethwan.cmd'));
	}
	if (mocawan == '1') {
		if (!(atm == '1' || ptm == '1' || ethwan == '1')) {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/mocawan.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'http://192.168.10.1/mocawan.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_MOCA_INTERFACE), 'http://192.168.10.1/mocawan.cmd'));
	}  
	
	if (!(atm == '1' || ptm == '1' || ethwan == '1' || mocawan == '1' || gponwan == '1' || eponwan == '1'))
		nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/wancfg.cmd'));
	insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_WAN),'http://192.168.10.1/wancfg.cmd'));

	if (vpn == '1') {
		nodeVPN = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_VPN), 'http://192.168.10.1/l2tpacwan.cmd'));
		insDoc(nodeVPN, gLnk('R', getMenuTitle(MENU_VPN_L2TPAC), 'http://192.168.10.1/l2tpacwan.cmd'));		
	}
	
   nodeLAN = insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAN),'http://192.168.10.1/lancfg2.html'));
   if ( lanvlanEnable == '1' ) 
      insDoc(nodeLAN, gLnk('R', getMenuTitle(MENU_LAN_VLAN),'http://192.168.10.1/lanvlancfg.html'));
   if ( ipv6Enable == '1' ) {
      insDoc(nodeLAN, gLnk('R', getMenuTitle(MENU_LAN6),'http://192.168.10.1/ipv6lancfg.html'));
   }

   // Configure connection auto detection
   if (autoDetection == '1')
      insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_AUTODETECTION), 'http://192.168.10.1/autodetection.cmd?action=view'));

   if ( mocaCfg == '1' ) {
      insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_MOCA_CONFIGURATION),'http://192.168.10.1/mocacfg.html'));
   }

   // Configure security menu
   // If firewall is enabled and not in ipExt mode enable firewall menus
   // if (proto != 'Bridge' && ipExt != '1' ) {
   if ( proto != 'Not Applicable' && ipExt != '1' ) {
      // NAT menu is always displayed now
      nodeNat = insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_SC_NAT), 'http://192.168.10.1/scvrtsrv.cmd?action=view'));
      insDoc(nodeNat, gLnk('R', getMenuTitle(MENU_SC_VIRTUAL_SERVER), 'http://192.168.10.1/scvrtsrv.cmd?action=view'));
      insDoc(nodeNat, gLnk('R', getMenuTitle(MENU_SC_PORT_TRIGGER), 'http://192.168.10.1/scprttrg.cmd?action=view'));
      insDoc(nodeNat, gLnk('R', getMenuTitle(MENU_SC_DMZ_HOST), 'http://192.168.10.1/scdmz.html'));
      if (multinat == '1')
      {
         insDoc(nodeNat, gLnk('R', getMenuTitle(MENU_DARE_MULTI_NAT), 'http://192.168.10.1/multinat.cmd?action=view'));
      }

      /* dare libo add for ALG config */
      if (siproxd == '1')
      {
         insDoc(nodeNat, gLnk('R', getMenuTitle(MENU_ALGS), 'http://192.168.10.1/algcfg.html'));
      }
      // Security menu is always displayed now                   	
      nodeFirewall = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_SC_SECURITY), 'http://192.168.10.1/scoutflt.cmd?action=view'));
      nodeIpFlt = insFld(nodeFirewall, gFld(getMenuTitle(MENU_SC_IP_FILTER), 'http://192.168.10.1/scoutflt.cmd?action=view'));
      insDoc(nodeIpFlt, gLnk('R', getMenuTitle(MENU_SC_OUTGOING), 'http://192.168.10.1/scoutflt.cmd?action=view'));
      insDoc(nodeIpFlt, gLnk('R', getMenuTitle(MENU_SC_INCOMING), 'http://192.168.10.1/scinflt.cmd?action=view'));
      insFld(nodeFirewall, gFld(getMenuTitle(MENU_MAC_FILTER),'http://192.168.10.1/scmacflt.cmd?action=view'));
      if(dos == '1')
      {
         insFld(nodeFirewall, gFld(getMenuTitle(MENU_DARE_DOS),'http://192.168.10.1/doscfg.html'));	
      }	

      if ( tod == '1' ) 
      {
         nodeParentalControl = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_PARENTAL_CNTL),'http://192.168.10.1/todmngr.tod?action=view'));
         insDoc(nodeParentalControl, gFld(getMenuTitle(MENU_TOD),'http://192.168.10.1/todmngr.tod?action=view'));

         if ( urlfilter == '1' )
         {
            insDoc(nodeParentalControl, gFld(getMenuTitle(MENU_URLFILTER),'http://192.168.10.1/urlfilter.cmd?action=view'));
         }
      }
      else if ( urlfilter == '1' )
      {
         nodeParentalControl = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_PARENTAL_CNTL),'urlfilter.cmd?action=view'));
         insDoc(nodeParentalControl, gFld(getMenuTitle(MENU_URLFILTER),'http://192.168.10.1/urlfilter.cmd?action=view'));
      }
   }
   if ( web_3g == '1' )
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_3G_DONGLE),'http://192.168.10.1/3g.html'));
   if ( web_3g_failover == '1' )
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_3G_FAILOVER),'http://192.168.10.1/3gfailover.html'));

      // Configure QoS class menu
   nodeQos = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_QOS),'http://192.168.10.1/qosqmgmt.html'));
   insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_QUEUE), 'http://192.168.10.1/qosqueue.cmd?action=view'));
   if (policeEnable == '1')
      insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_POLICER), 'http://192.168.10.1/qospolicer.cmd?action=view'));
   insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_CLASS), 'http://192.168.10.1/qoscls.cmd?action=view'));

   
   // Configure routing menu
   nodeRouting = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_ROUTING), 'http://192.168.10.1/rtdefaultcfg.html'));
   insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_DEFAULT_ROUTE), 'http://192.168.10.1/rtdefaultcfg.html'));
   insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_STATIC_ROUTE),'http://192.168.10.1/rtroutecfg.cmd?action=viewcfg'));
   if (pr == '1' )
      insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_POLICY_ROUTING),'http://192.168.10.1/prmngr.cmd?action=view'));

   if ( (proto == 'PPPoE' && ipExt == '0') ||
        (proto == 'PPPoA' && ipExt == '0') ||
        (proto == 'MER') ||
        (proto == 'IPoA') ) {
      // configure rip
      if ( rip == '1' )
         insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_RIP),'http://192.168.10.1/ripcfg.cmd?action=view'));
      // configure dns server
      nodeDnsSetup = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DNS), 'http://192.168.10.1/dnscfg.html'));
      insDoc(nodeDnsSetup, gLnk('R', getMenuTitle(MENU_DNS_SETUP), 'http://192.168.10.1/dnscfg.html'));
      // configure ddns client
      if ( ddnsd == '1' )
         insDoc(nodeDnsSetup, gLnk('R', getMenuTitle(MENU_DDNS), 'http://192.168.10.1/ddnsmngr.cmd'));
   }


   if (isDsl == 1)
   {
      // Configure ADSL Setting Menu based on Annex
      if ( std == 'annex_c' )
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'http://192.168.10.1/adslcfgc.html'));
      else if (buildVdsl == '1')
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'http://192.168.10.1/xdslcfg.html'));
      else
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'http://192.168.10.1/adslcfg.html'));

      if (dslbonding == '1')
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL_BONDING), 'http://192.168.10.1/dslbondingcfg.html'));
   }

	// Configure upnp
	if (upnp == '1')
	   insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_UPNP), 'http://192.168.10.1/upnpcfg.html'));

	
   // Configure dnsproxy
   if (dnsproxy == '1')
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DNSPROXY), 'http://192.168.10.1/dnsproxycfg.html'));

   // Configure print server
   if ( ipp == '1' )
      insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_IPP), 'http://192.168.10.1/ippcfg.html'));

   // Configure dlna
   if ( dlna == '1' )
      insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DLNA), 'http://192.168.10.1/dlnacfg.html'));

   // Configure wireless menu

   if ( parseInt(numWl) != 0 ) {
      if(numWl != '1')
         wlanMenu = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), wlItemsCgiCmd[0]));
 
      for(i = 0; i < parseInt(numWl); i++)
      {
         // Configure wireless menu
         if(numWl == '1')
            nodeWireless = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), wlItemsCgiCmd[0]));
         else
            nodeWireless = insFld(wlanMenu, gFld(wlmenuTitle[i], wlItemsCgiCmd[i]));

         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_BASIC), 'http://192.168.10.1/wlcfg.html'));
         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_SECURITY), 'http://192.168.10.1/wlsecurity.html'));
         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_MAC_FILTERING), 'http://192.168.10.1/wlmacflt.cmd?action=view'));
         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_WDS), 'http://192.168.10.1/wlwds.cmd?action=view'));
         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_ADVANCED), 'http://192.168.10.1/wlcfgadv.html'));
         //SUPPORT_SES
         if ( wireless_ses == '1' ) { 
            insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_SES), 'http://192.168.10.1/wlses.html'));      
         }
      
         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_STATION_LIST), 'http://192.168.10.1/wlstationlist.cmd'));
      }

      if ( wireless_wapi == '1' ) {      
          if (numWl == '1') {
             insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_WAPI_AS), 'http://192.168.10.1/wlwapias.html'));
          }
          else {
             insDoc(wlanMenu, gLnk('R', getMenuTitle(MENU_WL_WAPI_AS), 'http://192.168.10.1/wlwapias.html'));
          }
      }
   }


     /*Storage Service menu */
   if ((storageservice == '1') && (darestorageservice == '1'))
   {
      nodeStorage = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_STORAGESERVICE), 'http://192.168.10.1/storageservicecfg.cmd?view'));
      insDoc(nodeStorage, gLnk('R', getMenuTitle(MENU_STORAGE_INFO), 'http://192.168.10.1/storageservicecfg.cmd?view'));
      if(sambaservice == '1'){
         insDoc(nodeStorage, gLnk('R', getMenuTitle(MENU_STORAGE_USERACCOUNT), 'http://192.168.10.1/storageuseraccountcfg.cmd?view'));
      }
   }
   else if(storageservice == '1')
   {
      nodeStorage = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_STORAGESERVICE), 'http://192.168.10.1/storageservicecfg.cmd?view'));
      insDoc(nodeStorage, gLnk('R', getMenuTitle(MENU_STORAGE_INFO), 'http://192.168.10.1/storageservicecfg.cmd?view'));
   }

   // Configure voice menu
   if ( voice == 'MGCP' ) {
      nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'http://192.168.10.1/voicemgcp_basic.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_MGCP), 'http://192.168.10.1/voicemgcp_basic.html'));
      if( voiceNtr != '2' ) {
         insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_NTR), 'http://192.168.10.1/voicentr.html'));
      }
   }
   else if ( voice == 'SIP' ) {
      nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'http://192.168.10.1/voicesip_basic.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_BASIC), 'http://192.168.10.1/voicesip_basic.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_ADVANCED), 'http://192.168.10.1/voicesip_advanced.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_DEBUG), 'http://192.168.10.1/voicesip_debug.html'));
      if( voiceNtr != '2' ) {
         insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_NTR), 'http://192.168.10.1/voicentr.html'));
      }
      if( dect == '1' ) {
         insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_DECT), 'http://192.168.10.1/voicedect.html'));
      }
   }

   // Configure VLAN port mapping menu
   if ( vlanconfig == '1' ) {
      insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_INTF_GROUPING),'http://192.168.10.1/portmap.cmd'));
   }

   if ( ipv6Support == '1' ) {
      nodeIpTunnel = insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_IP_TUNNEL),'http://192.168.10.1/tunnelcfg.cmd?action=viewcfg'));
      insDoc(nodeIpTunnel, gLnk('R', getMenuTitle(MENU_6IN4_TUNNEL),'http://192.168.10.1/tunnelcfg.cmd?action=viewcfg'));
      insDoc(nodeIpTunnel, gLnk('R', getMenuTitle(MENU_4IN6_TUNNEL),'http://192.168.10.1/tunnelcfg.cmd?action=view'));
   }

   if ( ipsec == '1' ) {
      insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_SC_IPSEC), 'http://192.168.10.1/ipsec.cmd?action=view'));
   }
   if (certificate == '1')  {
      nodeCert = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_CERT), 'http://192.168.10.1/certlocal.cmd?action=view'));
      insDoc(nodeCert, gLnk('R', getMenuTitle(MENU_CERT_LOCAL), 'http://192.168.10.1/certlocal.cmd?action=view'));
      insDoc(nodeCert, gLnk('R', getMenuTitle(MENU_CERT_CA), 'http://192.168.10.1/certca.cmd?action=view'));
   }

   // Configure standby menu item 
   if ( standby == '1' ) 
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_STANDBY), 'http://192.168.10.1/standby.html'));

   // Configure power management 
   if ( pwrmngt == '1' ) 
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_PWRMNGT), 'http://192.168.10.1/pwrmngt.html'));
  
   if ( bmu == '1' ) 
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_BMU), 'http://192.168.10.1/bmu.html'));

   if ( multicast == '1' ) 
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_MULTICAST), 'http://192.168.10.1/multicast.html'));
  
   // Configure diagnostics menu
   nodeDiagnostics = insFld(foldersTree, gFld(getMenuTitle(MENU_DIAGNOSTICS), 'http://192.168.10.1/diag.html'));
   if (p8021ag == '1') {
      insDoc(nodeDiagnostics, gLnk('R', getMenuTitle(MENU_DIAGNOSTICS),'http://192.168.10.1/diag.html'));
      insDoc(nodeDiagnostics, gLnk('R', getMenuTitle(MENU_DIAGP8021AG),'http://192.168.10.1/diag8021ag.html'));
   }

   // Configure management menu
   nodeMngr = insFld(foldersTree, gFld(getMenuTitle(MENU_MANAGEMENT), 'http://192.168.10.1/backupsettings.html'));

   nodeSettings = insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SETTINGS), 'http://192.168.10.1/backupsettings.html'));
   insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_BACKUP),'http://192.168.10.1/backupsettings.html'));
   insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_UPDATE),'http://192.168.10.1/updatesettings.html'));
   insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_DEFAULT), 'http://192.168.10.1/defaultsettings.html'));

   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SYSTEM_LOG), 'http://192.168.10.1/logintro.html'));
   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SECURITY_LOG), 'http://192.168.10.1/seclogintro.html'));
   if ( snmp == '1' )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SNMP), 'http://192.168.10.1/snmpconfig.html'));
   if ( tr69c == '1' )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_TR69C), 'http://192.168.10.1/tr69cfg.html'));
   if ( omci == '1' ) {
      nodeOmci = insFld(nodeMngr, gFld(getMenuTitle(MENU_OMCI_CFG), 'http://192.168.10.1/omcicfg.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_GET_SET),'http://192.168.10.1/omcicfg.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_CREATE),'http://192.168.10.1/omcicreate.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_GET_NEXT),'http://192.168.10.1/omcigetnext.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_MACRO),'http://192.168.10.1/omcimacro.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_DOWNLOAD),'http://192.168.10.1/omcidownload.html'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_SYSTEM),'http://192.168.10.1/omcisystem.html'));
   }	  
   if ( sntp == '1' && proto != 'Bridge' && !(proto=='PPPoE' && ipExt=='1') && !(proto=='PPPoA' && ipExt=='1') )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_SNTP), 'http://192.168.10.1/sntpcfg.html'));

   nodeAccCntr = insFld(nodeMngr, gFld(getMenuTitle(MENU_ACC_CNTR), 'http://192.168.10.1/password.html'));
   insDoc(nodeAccCntr, gLnk('R', getMenuTitle(MENU_ACC_CNTR_PASSWORD), 'http://192.168.10.1/password.html'));
   if (accessControl == '1')
   {
       insDoc(nodeAccCntr, gLnk('R', getMenuTitle(MENU_ACC_CNTR_SERVICE), 'http://192.168.10.1/scsrvcntr.cmd?action=view'));
   }
   if (ipaddr_accctrl == '1')
   {
       /* Dare Lijiandong add for IP Address access control*/
       insDoc(nodeAccCntr, gLnk('R', getMenuTitle(MENU_ACC_CNTR_IP_ADDR), 'http://192.168.10.1/scacccntr.cmd?action=view')); 
   }
   //   if (osgi_jvm == 1)
   //   {
   //   	nodeSWModules = insFld(nodeMngr, gFld(getMenuTitle(MENU_SW_MODULES), 'http://192.168.10.1/swmodulesEE.cmd'));
   //   	insDoc(nodeSWModules, gLnk('R', getMenuTitle(MENU_SW_MODULES_EE),'http://192.168.10.1/swmodulesEE.cmd'));
   //   	insDoc(nodeSWModules, gLnk('R', getMenuTitle(MENU_SW_MODULES_DU),'http://192.168.10.1/swmodulesDU.cmd'));
   //   	insDoc(nodeSWModules, gLnk('R', getMenuTitle(MENU_SW_MODULES_EU), 'http://192.168.10.1/swmodulesEU.cmd'));
   //   }

   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_UPDATE_SOFTWARE), 'http://192.168.10.1/upload.html'));

   insFld(nodeMngr, gFld(getMenuTitle(MENU_RESET_ROUTER), 'http://192.168.10.1/resetrouter.html'));
	 if (ping_trace == '1')
   {
    	insFld(nodeMngr, gFld(getMenuTitle(MENU_PING_TRACE), 'http://192.168.10.1/pingtrace.html'));
   }
}

function menuSupport(options) {
   var std = options[MENU_OPTION_STANDARD];
   var proto = options[MENU_OPTION_PROTOCOL];
   var ipExt = options[MENU_OPTION_IP_EXTENSION];
   var wireless = options[MENU_OPTION_WIRELESS];
   var voice = options[MENU_OPTION_VOICE];
   var snmp = options[MENU_OPTION_SNMP];
   var ddnsd = options[MENU_OPTION_DDNSD];
   var sntp = options[MENU_OPTION_SNTP];
   var QosEnabled = options[MENU_OPTION_QOS];
   var ipp = options[MENU_OPTION_IPP];
   var rip = options[MENU_OPTION_RIP];
   var tr69c = options[MENU_OPTION_TR69C];
   var ipv6Support = options[MENU_OPTION_IPV6_SUPPORT];
   var ipv6Enable = options[MENU_OPTION_IPV6_ENABLE];
   var upnp = options[MENU_OPTION_UPNP];
   var dnsproxy = options[MENU_OPTION_DNSPROXY];
   var omci = options[MENU_OPTION_OMCI];
   var numWl = options[MENU_OPTION_WIRELESS_NUM_ADAPTOR];
   var wireless_ses = options[MENU_OPTION_WIRELESS_SES];
   var ethwan = options[MENU_OPTION_ETHWAN];
   var ptm = options[MENU_OPTION_PTMWAN];
   var pwrmngt = options[MENU_OPTION_PWRMNGT];
   var standby = options[MENU_OPTION_STANDBY];
   var voiceNtr = options[MENU_OPTION_VOICE_NTR];
   var atm = options[MENU_OPTION_ATMWAN];
   var mocawan = options[MENU_OPTION_MOCAWAN];
   var gponwan = options[MENU_OPTION_GPONWAN];
   var eponwan = options[MENU_OPTION_EPONWAN];
   var dect = options[MENU_OPTION_VOICE_DECT];
   var dslbonding = options[MENU_OPTION_DSL_BONDING];
   var vpn = options[MENU_OPTION_VPN];
   var storageservice = options[MENU_OPTION_STORAGESERVICE];
   var sambaservice = options[MENU_OPTION_SAMBA];
   var mocaCfg = options[MENU_OPTION_SUPPORT_MOCA];
   var wireless_wapi = options[MENU_OPTION_WIRELESS_WAPI_AS];
   var policeEnable = options[MENU_OPTION_POLICE_ENABLE];
   var bmu = options[MENU_OPTION_BMU];
   var isDsl = 0;
   var osgi_jvm = options[MENU_OPTION_OSGI_JVM];
   var buildVdsl = options[MENU_OPTION_BUILD_VDSL];
   var lanvlanEnable = options[MENU_OPTION_SUPPORT_LAN_VLAN];
   var darestorageservice = options[MENU_OPTION_DARESTORAGESERVICE];  //shiyan add samba function
   var web_3g = options[MENU_OPTION_3G_DONGLE];   
   var web_3g_failover=options[MENU_OPTION_3G_FAILOVER];
	// Configure advanced setup/layer 2 interface 
	if (atm == '1' ) {
		isDsl = 1;
		nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/dslatm.cmd'));
		nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'http://192.168.10.1/dslatm.cmd'));
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_DSL_ATM_INTERFACE), 'http://192.168.10.1/dslatm.cmd'));		
	} 
	if (ptm == '1') {
		isDsl = 1;
		if (atm != '1') {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/dslptm.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'http://192.168.10.1/dslptm.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_DSL_PTM_INTERFACE), 'http://192.168.10.1/dslptm.cmd'));		
	}	   	
	if (gponwan == '1' ) {
		if (!(atm == '1' || ptm == '1')) {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/gponwan.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'http://192.168.10.1/gponwan.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_GPONWAN_INTERFACE), 'http://192.168.10.1/gponwan.cmd'));
	}
	if (eponwan == '1' ) {
		if (!(atm == '1' || ptm == '1') || gponwan == '1' ) {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/eponwan.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'http://192.168.10.1/eponwan.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_EPONWAN_INTERFACE), 'http://192.168.10.1/eponwan.cmd'));
	}	
	if (ethwan == '1' ) {
		if (!(atm == '1' || ptm == '1' || gponwan == '1'  || eponwan == '1')) {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/ethwan.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'http://192.168.10.1/ethwan.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_ETH_INTERFACE), 'http://192.168.10.1/ethwan.cmd'));
	}
	if (mocawan == '1') {
		if (!(atm == '1' || ptm == '1' || ethwan == '1')) {
			nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/mocawan.cmd'));
			nodeLayer2Inteface = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAYER2_INTERFACE), 'http://192.168.10.1/mocawan.cmd'));
		}
		insDoc(nodeLayer2Inteface, gLnk('R', getMenuTitle(MENU_MOCA_INTERFACE), 'http://192.168.10.1/mocawan.cmd'));
	}  
	
	if (!(atm == '1' || ptm == '1' || ethwan == '1' || mocawan == '1' || gponwan == '1' || eponwan == '1'))
		nodeAdvancedSetup = insFld(foldersTree, gFld(getMenuTitle(MENU_ADVANCED_SETUP), 'http://192.168.10.1/wancfg.cmd'));
	insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_WAN),'http://192.168.10.1/wancfg.cmd'));

	if (vpn == '1') {
		nodeVPN = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_VPN), 'http://192.168.10.1/l2tpacwan.cmd'));
		insDoc(nodeVPN, gLnk('R', getMenuTitle(MENU_VPN_L2TPAC), 'http://192.168.10.1/l2tpacwan.cmd'));		
	}
		
   nodeLAN = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_LAN),'http://192.168.10.1/lancfg2.html'));
   if ( lanvlanEnable == '1' ) 
      insFld(nodeLAN, gFld(getMenuTitle(MENU_LAN_VLAN),'http://192.168.10.1/lanvlancfg.html'));
   
   if ( ipv6Enable == '1' ) {
      insDoc(nodeLAN, gLnk('R', getMenuTitle(MENU_LAN6),'http://192.168.10.1/ipv6lancfg.html'));
   }

   if ( mocaCfg == '1' ) {
      insDoc(nodeAdvancedSetup, gLnk('R', getMenuTitle(MENU_MOCA_CONFIGURATION),'http://192.168.10.1/mocacfg.html'));
   }
   if ( web_3g == '1')
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_3G_DONGLE),'http://192.168.10.1/3g.html'));
   if ( web_3g_failover == '1' )
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_3G_FAILOVER),'http://192.168.10.1/3gfailover.html'));

      // Configure QoS class menu
   nodeQos = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_QOS),'http://192.168.10.1/qosqmgmt.html'));
   insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_QUEUE), 'http://192.168.10.1/qosqueue.cmd?action=view'));
   if (policeEnable == '1')
      insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_POLICER), 'http://192.168.10.1/qospolicer.cmd?action=view'));
   insDoc(nodeQos, gLnk('R', getMenuTitle(MENU_QOS_CLASS), 'http://192.168.10.1/qoscls.cmd?action=view'));

   // Configure routing menu
   nodeRouting = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_ROUTING), 'http://192.168.10.1/rtdefaultcfg.html'));
   insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_DEFAULT_ROUTE), 'http://192.168.10.1/rtdefaultcfg.html'));
   insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_STATIC_ROUTE),'http://192.168.10.1/rtroutecfg.cmd?action=viewcfg'));

   if ( (proto == 'PPPoE' && ipExt == '0') ||
        (proto == 'PPPoA' && ipExt == '0') ||
        (proto == 'MER') ||
        (proto == 'IPoA') ) {
      // configure rip
      if ( rip == '1' )
         insDoc(nodeRouting, gLnk('R', getMenuTitle(MENU_RT_RIP),'http://192.168.10.1/ripcfg.cmd?action=view'));
      // configure dns server
      nodeDnsSetup = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DNS), 'http://192.168.10.1/dnscfg.html'));
      insDoc(nodeDnsSetup, gLnk('R', getMenuTitle(MENU_DNS_SETUP), 'http://192.168.10.1/dnscfg.html'));
      // configure ddns client
      if ( ddnsd == '1' )
         insDoc(nodeDnsSetup, gLnk('R', getMenuTitle(MENU_DDNS), 'http://192.168.10.1/ddnsmngr.cmd'));
   }

   if (isDsl == 1)
   {
      // Configure ADSL Setting Menu based on Annex
      if ( std == 'annex_c' )
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'http://192.168.10.1/adslcfgc.html'));
      else if (buildVdsl == '1')
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'http://192.168.10.1/xdslcfg.html'));
      else
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL), 'http://192.168.10.1/adslcfg.html'));

      if (dslbonding == '1')
         insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DSL_BONDING), 'http://192.168.10.1/dslbondingcfg.html'));
   }

	
   // Configure print server
   if ( ipp == '1' )
      insDoc(nodeAdvancedSetup, gFld(getMenuTitle(MENU_IPP), 'http://192.168.10.1/ippcfg.html'));
   
   // Configure upnp
   if (upnp == '1')
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_UPNP), 'http://192.168.10.1/upnpcfg.html'));

   // Configure dnsproxy
   if (dnsproxy == '1')
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_DNSPROXY), 'http://192.168.10.1/dnsproxycfg.html'));
   
   // Configure standby menu item 
   if ( standby == '1' ) 
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_STANDBY), 'http://192.168.10.1/standby.html'));

   // Configure power management 
   if ( pwrmngt == '1' ) 
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_PWRMNGT), 'http://192.168.10.1/pwrmngt.html'));
  
   if ( bmu == '1' ) 
      insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_BMU), 'http://192.168.10.1/bmu.html'));

   // Configure wireless menu
   if ( parseInt(numWl) != 0 ) {

       if(numWl != '1')
           wlanMenu = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), wlItemsCgiCmd[0]));
 
       for(i = 0; i < parseInt(numWl); i++)
       {
   // Configure wireless menu
            if(numWl == '1')
                nodeWireless = insFld(foldersTree, gFld(getMenuTitle(MENU_WIRELESS_SETTINGS), wlItemsCgiCmd[0]));
	     else
		  nodeWireless = insFld(wlanMenu, gFld(wlmenuTitle[i], wlItemsCgiCmd[i]));
      insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_BASIC), 'http://192.168.10.1/wlcfg.html'));
      insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_SECURITY), 'http://192.168.10.1/wlsecurity.html'));
      insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_MAC_FILTERING), 'http://192.168.10.1/wlmacflt.cmd?action=view'));
      insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_WDS), 'http://192.168.10.1/wlwds.cmd?action=view'));
      insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_ADVANCED), 'http://192.168.10.1/wlcfgadv.html'));
      //SUPPORT_SES
      if ( wireless_ses == '1' ) { 
         insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_SES), 'http://192.168.10.1/wlses.html'));      
      }
      
      insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_STATION_LIST), 'http://192.168.10.1/wlstationlist.cmd'));
   


        }
      if ( wireless_wapi == '1' ) {      
          if (numWl == '1') {
             insDoc(nodeWireless, gLnk('R', getMenuTitle(MENU_WL_WAPI_AS), 'http://192.168.10.1/wlwapias.html'));
          }
          else {
             insDoc(wlanMenu, gLnk('R', getMenuTitle(MENU_WL_WAPI_AS), 'http://192.168.10.1/wlwapias.html'));
          }
      }
   }

     /*Storage Service menu */
   if ((storageservice == '1') && (darestorageservice != '1'))
   {
      nodeStorage = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_STORAGESERVICE), 'http://192.168.10.1/storageservicecfg.cmd?view'));
      insDoc(nodeStorage, gLnk('R', getMenuTitle(MENU_STORAGE_INFO), 'http://192.168.10.1/storageservicecfg.cmd?view'));
      if(sambaservice == '1'){
         insDoc(nodeStorage, gLnk('R', getMenuTitle(MENU_STORAGE_USERACCOUNT), 'http://192.168.10.1/storageuseraccountcfg.cmd?view'));
      }
   }
   else if(storageservice == '1')
   {
      nodeStorage = insFld(nodeAdvancedSetup, gFld(getMenuTitle(MENU_STORAGESERVICE), 'http://192.168.10.1/storageservicecfg.cmd?view'));
      insDoc(nodeStorage, gLnk('R', getMenuTitle(MENU_STORAGE_INFO), 'http://192.168.10.1/storageservicecfg.cmd?view'));
   }

   // Configure voice menu
   if ( voice == 'MGCP' ) {
      nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'http://192.168.10.1/voicemgcp_basic.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_MGCP), 'http://192.168.10.1/voicemgcp_basic.html'));
      if( voiceNtr != '2' ) {
         insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_NTR), 'http://192.168.10.1/voicentr.html'));
      }     
   }
   else if ( voice == 'SIP' ) {
      nodeVoice = insFld(foldersTree, gFld(getMenuTitle(MENU_VOICE_SETTINGS), 'http://192.168.10.1/voicesip_basic.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_BASIC), 'http://192.168.10.1/voicesip_basic.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_ADVANCED), 'http://192.168.10.1/voicesip_advanced.html'));
      insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_SIP_DEBUG), 'http://192.168.10.1/voicesip_debug.html'));
      if( voiceNtr != '2' ) {
         insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_NTR), 'http://192.168.10.1/voicentr.html'));
      }
      if( dect == '1' ) {
         insDoc(nodeVoice, gLnk('R', getMenuTitle(MENU_VOICE_DECT), 'http://192.168.10.1/voicedect.html'));
      }   
   }

    // Configure diagnostics menu
   nodeDiagnostics = insFld(foldersTree, gFld(getMenuTitle(MENU_DIAGNOSTICS), 'http://192.168.10.1/diag.html'));

   // Configure management menu
   nodeMngr = insFld(foldersTree, gFld(getMenuTitle(MENU_MANAGEMENT), 'http://192.168.10.1/backupsettings.html'));
   nodeSettings = insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SETTINGS), 'http://192.168.10.1/backupsettings.html'));
   insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_BACKUP),'http://192.168.10.1/backupsettings.html'));
   insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_UPDATE),'http://192.168.10.1/updatesettings.html'));
   insDoc(nodeSettings, gLnk('R', getMenuTitle(MENU_TL_SETTINGS_DEFAULT), 'http://192.168.10.1/defaultsettings.html'));

   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SYSTEM_LOG), 'http://192.168.10.1/logintro.html'));
   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SECURITY_LOG), 'http://192.168.10.1/seclogintro.html'));
   if ( snmp == '1' )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SNMP), 'http://192.168.10.1/snmpconfig.html'));
   if ( tr69c == '1' )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_TR69C), 'http://192.168.10.1/tr69cfg.html'));
   if ( omci == '1' ) {
      nodeOmci = insFld(nodeMngr, gFld(getMenuTitle(MENU_OMCI_CFG), 'http://192.168.10.1/omcicfg.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_GET_SET),'http://192.168.10.1/omcicfg.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_CREATE),'http://192.168.10.1/omcicreate.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_GET_NEXT),'http://192.168.10.1/omcigetnext.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_MACRO),'http://192.168.10.1/omcimacro.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_DOWNLOAD),'http://192.168.10.1/omcidownload.html'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_SYSTEM),'http://192.168.10.1/omcisystem.html'));
   }
   if ( sntp == '1' && proto != 'Bridge' && !(proto=='PPPoE' && ipExt=='1') && !(proto=='PPPoA' && ipExt=='1') )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_SNTP), 'http://192.168.10.1/sntpcfg.html'));

   if (osgi_jvm == 1)
   {
   	nodeSWModules = insFld(nodeMngr, gFld(getMenuTitle(MENU_SW_MODULES), 'http://192.168.10.1/swmodulesEE.cmd'));
   	insDoc(nodeSWModules, gLnk('R', getMenuTitle(MENU_SW_MODULES_EE),'http://192.168.10.1/swmodulesEE.cmd'));
   	insDoc(nodeSWModules, gLnk('R', getMenuTitle(MENU_SW_MODULES_DU),'http://192.168.10.1/swmodulesDU.cmd'));
   	insDoc(nodeSWModules, gLnk('R', getMenuTitle(MENU_SW_MODULES_EU), 'http://192.168.10.1/swmodulesEU.cmd'));
   }
   nodeAccCntr = insFld(nodeMngr, gFld(getMenuTitle(MENU_ACC_CNTR), 'http://192.168.10.1/password.html'));
   insDoc(nodeAccCntr, gLnk('R', getMenuTitle(MENU_ACC_CNTR_PASSWORD), 'http://192.168.10.1/password.html'));
   
   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_UPDATE_SOFTWARE), 'http://192.168.10.1/upload.html'));
   insFld(nodeMngr, gFld(getMenuTitle(MENU_RESET_ROUTER), 'http://192.168.10.1/resetrouter.html'));
}

function menuUser() {
   var snmp = options[MENU_OPTION_SNMP];
   var tr69c = options[MENU_OPTION_TR69C];
   var omci = options[MENU_OPTION_OMCI];
   
   // Configure diagnostics menu
   nodeDiagnostics = insFld(foldersTree, gFld(getMenuTitle(MENU_DIAGNOSTICS), 'http://192.168.10.1/diag.html'));

   // Configure management menu
   nodeMngr = insFld(foldersTree, gFld(getMenuTitle(MENU_MANAGEMENT), 'http://192.168.10.1/logintro.html'));
   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SYSTEM_LOG), 'http://192.168.10.1/logintro.html'));
   if ( snmp == '1' )
   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_SNMP), 'http://192.168.10.1/snmpconfig.html'));
   if ( tr69c == '1' )
      insFld(nodeMngr, gFld(getMenuTitle(MENU_TR69C), 'http://192.168.10.1/tr69cfg.html'));
   if ( omci == '1' ) {
      nodeOmci = insFld(nodeMngr, gFld(getMenuTitle(MENU_OMCI_CFG), 'http://192.168.10.1/omcicfg.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_GET_SET),'http://192.168.10.1/omcicfg.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_CREATE),'http://192.168.10.1/omcicreate.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_GET_NEXT),'http://192.168.10.1/omcigetnext.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_MACRO),'http://192.168.10.1/omcimacro.cmd?action=view'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_DOWNLOAD),'http://192.168.10.1/omcidownload.html'));
      insDoc(nodeOmci, gLnk('R', getMenuTitle(MENU_OMCI_SYSTEM),'http://192.168.10.1/omcisystem.html'));
   }
   insFld(nodeMngr, gFld(getMenuTitle(MENU_TL_UPDATE_SOFTWARE), 'http://192.168.10.1/upload.html'));
}

function createBcmMenu(options) {
   var user = options[MENU_OPTION_USER];
   var proto = options[MENU_OPTION_PROTOCOL];
   var ipExt = options[MENU_OPTION_IP_EXTENSION];
   var dhcpen = options[MENU_OPTION_DHCPEN];
   var mocaStats = options[MENU_OPTION_SUPPORT_MOCA];
   var ptm = options[MENU_OPTION_PTMWAN];
   var atm = options[MENU_OPTION_ATMWAN];
   var mocawan = options[MENU_OPTION_MOCAWAN];
   var ethwan = options[MENU_OPTION_ETHWAN];
   var gponwan = options[MENU_OPTION_GPONWAN];
   var eponwan = options[MENU_OPTION_EPONWAN];
   var optical = options[MENU_OPTION_OPTICAL];

   foldersTree = gFld('', 'http://192.168.10.1/info.html');
   // device info menu
   nodeDeviceInfo = insFld(foldersTree, gFld(getMenuTitle(MENU_DEVICE_INFO), 'http://192.168.10.1/info.html'));
   // device summary menu
   insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_DEVICE_SUMMARY), 'http://192.168.10.1/info.html'));
   // device wan menu
   insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_DEVICE_WAN), 'http://192.168.10.1/wancfg.cmd?action=view'));
   // device statistics menu
   nodeSts = insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_STATISTICS), 'http://192.168.10.1/statsifc.html'));
   insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_ST_LAN), 'http://192.168.10.1/statsifc.html'));
   if (mocaStats == '1')
      insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_ST_MOCA), 'http://192.168.10.1/statsmoca.cmd?choice=LAN'));
   if (ptm == '1' || atm == '1' || mocawan == '1' ||
       ethwan == '1' || gponwan == '1' || eponwan == '1')
      insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_WAN), 'http://192.168.10.1/statswan.cmd'));
   if (ptm == '1' || atm == '1') {
      insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_ST_ATM), 'http://192.168.10.1/statsxtm.cmd'));
      insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_ST_ADSL), 'http://192.168.10.1/statsadsl.html'));
   }
   if (optical == '1')
      insDoc(nodeSts, gLnk('R', getMenuTitle(MENU_OPTICAL), 'http://192.168.10.1/statsopticifc.html'));
   // device route menu
   insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_DEVICE_ROUTE), 'http://192.168.10.1/rtroutecfg.cmd?action=view'));
   insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_RT_ARP),'http://192.168.10.1/arpview.cmd'));
   // dhcp info
   if (!(proto == 'Bridge' || ipExt == '1') && dhcpen == '1') {
      insFld(nodeDeviceInfo, gFld(getMenuTitle(MENU_DHCPINFO),'http://192.168.10.1/dhcpinfo.html'));
   }
   if ( user == 'admin' )
      menuAdmin(options);
   else if ( user == 'support' )
      menuSupport(options);
   else if ( user == 'user' )
      menuUser();
}
