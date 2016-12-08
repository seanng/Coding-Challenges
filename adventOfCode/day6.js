/* jshint esversion: 6*/

/* --- Day 6: Signals and Noise ---

Something is jamming your communications with Santa. Fortunately, your signal is only partially jammed, and protocol in situations like this is to switch to a simple repetition code to get the message through.

In this model, the same message is sent repeatedly. You've recorded the repeating message signal (your puzzle input), but the data seems quite corrupted - almost too badly to recover. Almost.

All you need to do is figure out which character is most frequent for each position. For example, suppose you had recorded the following messages:

eedadn
drvtee
eandsr
raavrd
atevrs
tsrnev
sdttsa
rasrtv
nssdts
ntnada
svetve
tesnvt
vntsnd
vrdear
dvrsen
enarar
The most common character in the first column is e; in the second, a; in the third, s, and so on. Combining these characters returns the error-corrected message, easter.

Given the recording in your puzzle input, what is the error-corrected version of the message being sent?

*/

const input = 'jpnomsle wosinwfi lekivkmf ijymvkgq bmwgxxrm wctorbkj iuktmcxm xzufudbs cwmsutoh pcknfbys yqjwprss tyjpkbzw smzvjevb cvokjxwh gpgcqtra ddhfelaf bbyfmepw mkwbkugd lipyfcji whebvmly fnfceaiv lbiajtkz odqbucmm eytqacld iswggugt vsbeelal qzuagiql hwtibcxa lpxfvhmo pnwjlqsb ksnntlgo yjoizdcx rtqwtjuk ehrrryvq aijkhibu blzcoqqt byxxkdzc ptlkniqa geolrsnl ubhmuzjb damdpnuu smnjkopv bvdfbuao rserfaeg dogngyha xkzojucm dfbqwprv qwgvbjfw mvpnizwm wsampicy yurbjmhm drmgzhqp dzianjpi iresuphy lxjrzrcv ffjfzxdf ssrddhnd bvjefcmn zqjhqrtl uhgxmesn nsziibek acdgklky niizwhfj dengnljm xmqszgyi oufizqmt ynhxyfva qkwqtioc todqskbu zsluppbw xvlbykhb qgoeowcu lvhwewll uqexslyr bgktzjzn ldeojqqi gismwlhy htarpyss oxetowsl iymtvyia rcsdusmz nzwpiiqq nwpubxxc deifwrms estasjvp rustvine iecvrvwv ouwcaogn kkapkike sharidxa vrypzuso kdmuultn tdwrwvyv fotsbqly exvncncx rzmqqska ozxpbjgl bjztltqm mmzjvdnm wglezjrg jpmoyhwg gpggddnf vpfwhqqa qnjiebzb xthftnad sbdtwsii vojgpucl krvrizgn xllmrooy mahsrwam qcakvhkt fvwdvlty fkdgbfzg vobdysbi kfmwpydn citzswdp iynphpar myrtfvdj tgnjmjgx bfnuugyb hxnjjiub suutqaja licsnpja kfazyoho yjdcddul lfuzvuko cueyfqoo cgdrpadf pqhwtazv gfiuemfx vexkkndk hzfmwzvj pjswysbs gpqannoj wlcpvvbs tdsugdnd juaaukem obhsqpmf ebzodoib hlgkjsof rhdpftoc tvkdgreo knuacdvw rutjaaze hlapqcfu eermrtme kfsztndj qjwclbif axlrkqiz pgozhccw ufytusig gdskhtzb wdpwtqji pfgzsxvn bamiwews enkfycps dsglfyyz arizzkcw fyirvhby igjyhvbi bavypopm fqudvrdi gepouvac ugbwodrp hclwxxun ncnlgwds fvnaifxa xtzfppwj viekslmh lksqojwk xnlihitg vxmlnoci ccsmdidh oqrtyvkz urzmcqmj qbnkluys nvdazrnu zvywgxdn scugbiox ewivhegg yfyexsfs kgocfzja zrjdaqta gkhpnanf vlxjhfjt ykgbopmt utiesnih shakguot hywmcuku gjltpbfr lzkatxwc wxieyztu iwvtqbeh tlcqcsjl fuxqnppn ouoernej xfdtewzd etoaplbw secuzkdr kclibqre qooqiobq nrcfwxfi maqnntic qwpulgbj pdjzfvyj iwqhwlnj oihftklw iywvbexe rhpzloag leaelzup hlggwpor pqehtxul zkyaybep gheivvpk xqlgyrlb wujztjtt nrwxkmkd ijtcaoux tmmjmpeh xdhdcytk jpchdagy qlfdefaw emshcltx prhmorgz dhdxxubc ntfmmmax oxzaksof zonxcmwn njpytedo fftomgwl gzlvtohn hyibhnja irxwinpr vojbajhr kqgydtiq pufiemmt mvkqthft xbjrglza rrdlpzqy gmayqdny moykjapv fcfzqmnq hwcvctfe aerljjio ydvqdfym vobhfewn fvfcoohl chqjnmcq geupmbzm bekjwcaz olujcecy tlmygzkv mhgjxuvt lwnjsqcu yjoncnil vbfhqdlb gkrhryeh cdofkbpu jubtekng azzixhzy zgsskveh ygxbbpgm ntvepwno uaivckks kpcoypio elfhilea qofoadkv cetmbhlm cdqiheur bopfgmrd ioircgxh znlyvzrq nhsuqzst hxizhcye jktpxqxg mrhhzqpq phzlffwd zfyipddp ixwlukmz uzmznxgp bizkzxfx gabulwor jmguhjti yzrbgcvy waranxrq otilexwt ecwupxiv rzdcomik qkbgxhjv dwkuiczc jxghaqdc srocreym sxhgoexu fghwatip czdccopz oiuyqhsh ctxsjzlb tlifjaof uvgumrre uneknsqz oxkcxoqh bypdayvx agdrkwty enuoyago zowyrehd moxjokhp llsdktgq ofccwfdq betygaxh ypcqavic dppvquxj qtfjgzrm hyuatorj utannehg njylrfzo azbhxjtg flgkqfgk rmimpbmd lucexbnt hrxujuba cmymrpiv tnwoqgyf oovhrncn zsbxhvpv ywqfdmvv lsfufyus syqsyyyq oxuqqgqz dvmqxgyw vkvvovci jhzqcwsd oamvebre qncykjpp kkxhndot tzcxiwwt dbmxcvlx anexktve axrssdyc buwcouzt ddtvfdeq cgttxyuc ilbidgtr rfndwckv bstpsmkx cbzvrfnk qjaqwbyi vcpchkwk vaapmcrf xpbfarcg nakawsui wfyiwmpb wbkxtkhc mjigbbbf sjdgahss ahtdkgbu dineiyik soahqthe ptmlrfaa nfewoxxr atgghurm ulspehpz hqzumvcm vahbjujo emrmchfj ulfxsmod bqoaxtvw jfklxtsd vyqmyqlr dqoqtmvt lgbzegrj hicyyfjf keagysmb uanpokzr pmmdayzv aagsbnrn jqwianxu mivxziox hyfwolyx tdxjcoye prlslumt xnlljwjt qfzbgzqr wszgyzga tpupozsc vxhwkloy pvrbtcdq rjeeizwo fevnqnvi miqxseme qrneqrxe yzomhybx tplrffhp evxcbwvg qhhxylde kvzxublx aaycljrc fdonlrel rswdadys elpfzlgl tbcppggi bulqfhyu ewbzhrqv wwepirtw ugazsxlk xaalxyhv imddfsvc lszgvama xzgwdixv neukxolf fmfvjylf rxrcgmjg gysmaadp zankjgys amefwpuh scotnyzl ssakungx sakfzaud dgdnjmjt uyhdxrvl ydhbtxah chezbkhz wjnyjuzk kxvujbpw igrjmhcm gublnlvh vjfrwqwg oprvwhfr yilyvzez yhodibug fivsekbb cmlomgem rpiomxuq kaxjtsfg fmfsffjr wddxezfa wcrligql bnrohvbd msprlord rjyomeck aigiqhns nnjszkjz kpdcrcuq znuwpnsw awservpq mhbgizrc gcqxiazq ezpemwef abvtqswk zyvkkqap pnyybtke kqglepvn lsxronqx eccaqkln jitacsjj dibwyvne achslqlr zaocguqz hrvktaun desabwmb ztmvhatf qvsbgobs xplhpigo mnvoixgz hbwwscfx mbjbotfb ycbeojag uwqqlzse gffufrdj qhpjrmbw fkprueel ctenlqry dqtrrffp sweaftmd yekzdapr zyskkvsp cjwysyjp vphuswhl tzbjniju wvmxhrzk vsyedbwh uxllegxv jginldku jdczunlb jgdruatz makhdcsq wexgoeax squsatpz cqubtkni xrnfofvh miuvlese aefylred fusyuybs bykemjhu aasrsjxf ykvdmwxd joyoibnb tpoowkug jnthvfhc sxxfyiwb ksqmggsz ymjiliqp uwcnppas flakidlb ikchcehd ptatwguk pmolarwq snehzsaw wwqmvmwy ulvijwso jbvgdeqk xkkodsar yvbtdfxu hcpylcfh xgxzfvkw zlklsmdi obrqupcw ibkyzfoh tqvvdgps kzynbdif ztjnvwsu xksqgpqu uwlpugoh pdzhciob kujijtjj jvencltk qozxxgkg eoasncao gpunvjky ijqnioni nsjpbqik ttyrgxuc nzxunpqn rknbznol wbmorrtq tpfhbxfp lxdjaykw riubeihx hrbbmbky atjnsacd xtekdptu rdtevcyh cjpssjvp cjywepqo rutbqeuw sdbxunzj ekpvsftr obutdocz jwcpzflw lqcnhser lhojehdt gfrnfmxx jyxwltij pupdxhxy oqqbpjrn zmrobltk rhkvdyec nrvsnrtc pmpmdixu hwqzyvef tcnckoov icgvlwso nqiaause jntduaap timsxgui dqvlekla zkxemsmj zbquxifp mgyvaneg eoqtkvpo wxyqshnk vritmuaz nzqlrzfn';

const solution = (str) => {
  const strArr = str.split(' ');
  let hash = {};
  let res = '';

  strArr.forEach(e=>{
    for (let i = 0; i < e.length; i++) {
      let letter = e[i];
      if (hash[i] === undefined) {
        hash[i] = {};
      }
      hash[i][letter] = hash[i][letter] ? hash[i][letter] + 1 : 1;
    }
  });

  Object.keys(hash).forEach(i=>{
    let sortedColArr = Object.keys(hash[i]).sort((a,b)=>{
      return hash[i][b] - hash[i][a];
    });
    res+=sortedColArr[0];
  });

  return res;
};


console.log(solution('jpnomsle wosinwfi lekivkmf ijymvkgq bmwgxxrm wctorbkj iuktmcxm xzufudbs cwmsutoh pcknfbys yqjwprss tyjpkbzw smzvjevb cvokjxwh gpgcqtra ddhfelaf bbyfmepw mkwbkugd lipyfcji whebvmly fnfceaiv lbiajtkz odqbucmm eytqacld iswggugt vsbeelal qzuagiql hwtibcxa lpxfvhmo pnwjlqsb ksnntlgo yjoizdcx rtqwtjuk ehrrryvq aijkhibu blzcoqqt byxxkdzc ptlkniqa geolrsnl ubhmuzjb damdpnuu smnjkopv bvdfbuao rserfaeg dogngyha xkzojucm dfbqwprv qwgvbjfw mvpnizwm wsampicy yurbjmhm drmgzhqp dzianjpi iresuphy lxjrzrcv ffjfzxdf ssrddhnd bvjefcmn zqjhqrtl uhgxmesn nsziibek acdgklky niizwhfj dengnljm xmqszgyi oufizqmt ynhxyfva qkwqtioc todqskbu zsluppbw xvlbykhb qgoeowcu lvhwewll uqexslyr bgktzjzn ldeojqqi gismwlhy htarpyss oxetowsl iymtvyia rcsdusmz nzwpiiqq nwpubxxc deifwrms estasjvp rustvine iecvrvwv ouwcaogn kkapkike sharidxa vrypzuso kdmuultn tdwrwvyv fotsbqly exvncncx rzmqqska ozxpbjgl bjztltqm mmzjvdnm wglezjrg jpmoyhwg gpggddnf vpfwhqqa qnjiebzb xthftnad sbdtwsii vojgpucl krvrizgn xllmrooy mahsrwam qcakvhkt fvwdvlty fkdgbfzg vobdysbi kfmwpydn citzswdp iynphpar myrtfvdj tgnjmjgx bfnuugyb hxnjjiub suutqaja licsnpja kfazyoho yjdcddul lfuzvuko cueyfqoo cgdrpadf pqhwtazv gfiuemfx vexkkndk hzfmwzvj pjswysbs gpqannoj wlcpvvbs tdsugdnd juaaukem obhsqpmf ebzodoib hlgkjsof rhdpftoc tvkdgreo knuacdvw rutjaaze hlapqcfu eermrtme kfsztndj qjwclbif axlrkqiz pgozhccw ufytusig gdskhtzb wdpwtqji pfgzsxvn bamiwews enkfycps dsglfyyz arizzkcw fyirvhby igjyhvbi bavypopm fqudvrdi gepouvac ugbwodrp hclwxxun ncnlgwds fvnaifxa xtzfppwj viekslmh lksqojwk xnlihitg vxmlnoci ccsmdidh oqrtyvkz urzmcqmj qbnkluys nvdazrnu zvywgxdn scugbiox ewivhegg yfyexsfs kgocfzja zrjdaqta gkhpnanf vlxjhfjt ykgbopmt utiesnih shakguot hywmcuku gjltpbfr lzkatxwc wxieyztu iwvtqbeh tlcqcsjl fuxqnppn ouoernej xfdtewzd etoaplbw secuzkdr kclibqre qooqiobq nrcfwxfi maqnntic qwpulgbj pdjzfvyj iwqhwlnj oihftklw iywvbexe rhpzloag leaelzup hlggwpor pqehtxul zkyaybep gheivvpk xqlgyrlb wujztjtt nrwxkmkd ijtcaoux tmmjmpeh xdhdcytk jpchdagy qlfdefaw emshcltx prhmorgz dhdxxubc ntfmmmax oxzaksof zonxcmwn njpytedo fftomgwl gzlvtohn hyibhnja irxwinpr vojbajhr kqgydtiq pufiemmt mvkqthft xbjrglza rrdlpzqy gmayqdny moykjapv fcfzqmnq hwcvctfe aerljjio ydvqdfym vobhfewn fvfcoohl chqjnmcq geupmbzm bekjwcaz olujcecy tlmygzkv mhgjxuvt lwnjsqcu yjoncnil vbfhqdlb gkrhryeh cdofkbpu jubtekng azzixhzy zgsskveh ygxbbpgm ntvepwno uaivckks kpcoypio elfhilea qofoadkv cetmbhlm cdqiheur bopfgmrd ioircgxh znlyvzrq nhsuqzst hxizhcye jktpxqxg mrhhzqpq phzlffwd zfyipddp ixwlukmz uzmznxgp bizkzxfx gabulwor jmguhjti yzrbgcvy waranxrq otilexwt ecwupxiv rzdcomik qkbgxhjv dwkuiczc jxghaqdc srocreym sxhgoexu fghwatip czdccopz oiuyqhsh ctxsjzlb tlifjaof uvgumrre uneknsqz oxkcxoqh bypdayvx agdrkwty enuoyago zowyrehd moxjokhp llsdktgq ofccwfdq betygaxh ypcqavic dppvquxj qtfjgzrm hyuatorj utannehg njylrfzo azbhxjtg flgkqfgk rmimpbmd lucexbnt hrxujuba cmymrpiv tnwoqgyf oovhrncn zsbxhvpv ywqfdmvv lsfufyus syqsyyyq oxuqqgqz dvmqxgyw vkvvovci jhzqcwsd oamvebre qncykjpp kkxhndot tzcxiwwt dbmxcvlx anexktve axrssdyc buwcouzt ddtvfdeq cgttxyuc ilbidgtr rfndwckv bstpsmkx cbzvrfnk qjaqwbyi vcpchkwk vaapmcrf xpbfarcg nakawsui wfyiwmpb wbkxtkhc mjigbbbf sjdgahss ahtdkgbu dineiyik soahqthe ptmlrfaa nfewoxxr atgghurm ulspehpz hqzumvcm vahbjujo emrmchfj ulfxsmod bqoaxtvw jfklxtsd vyqmyqlr dqoqtmvt lgbzegrj hicyyfjf keagysmb uanpokzr pmmdayzv aagsbnrn jqwianxu mivxziox hyfwolyx tdxjcoye prlslumt xnlljwjt qfzbgzqr wszgyzga tpupozsc vxhwkloy pvrbtcdq rjeeizwo fevnqnvi miqxseme qrneqrxe yzomhybx tplrffhp evxcbwvg qhhxylde kvzxublx aaycljrc fdonlrel rswdadys elpfzlgl tbcppggi bulqfhyu ewbzhrqv wwepirtw ugazsxlk xaalxyhv imddfsvc lszgvama xzgwdixv neukxolf fmfvjylf rxrcgmjg gysmaadp zankjgys amefwpuh scotnyzl ssakungx sakfzaud dgdnjmjt uyhdxrvl ydhbtxah chezbkhz wjnyjuzk kxvujbpw igrjmhcm gublnlvh vjfrwqwg oprvwhfr yilyvzez yhodibug fivsekbb cmlomgem rpiomxuq kaxjtsfg fmfsffjr wddxezfa wcrligql bnrohvbd msprlord rjyomeck aigiqhns nnjszkjz kpdcrcuq znuwpnsw awservpq mhbgizrc gcqxiazq ezpemwef abvtqswk zyvkkqap pnyybtke kqglepvn lsxronqx eccaqkln jitacsjj dibwyvne achslqlr zaocguqz hrvktaun desabwmb ztmvhatf qvsbgobs xplhpigo mnvoixgz hbwwscfx mbjbotfb ycbeojag uwqqlzse gffufrdj qhpjrmbw fkprueel ctenlqry dqtrrffp sweaftmd yekzdapr zyskkvsp cjwysyjp vphuswhl tzbjniju wvmxhrzk vsyedbwh uxllegxv jginldku jdczunlb jgdruatz makhdcsq wexgoeax squsatpz cqubtkni xrnfofvh miuvlese aefylred fusyuybs bykemjhu aasrsjxf ykvdmwxd joyoibnb tpoowkug jnthvfhc sxxfyiwb ksqmggsz ymjiliqp uwcnppas flakidlb ikchcehd ptatwguk pmolarwq snehzsaw wwqmvmwy ulvijwso jbvgdeqk xkkodsar yvbtdfxu hcpylcfh xgxzfvkw zlklsmdi obrqupcw ibkyzfoh tqvvdgps kzynbdif ztjnvwsu xksqgpqu uwlpugoh pdzhciob kujijtjj jvencltk qozxxgkg eoasncao gpunvjky ijqnioni nsjpbqik ttyrgxuc nzxunpqn rknbznol wbmorrtq tpfhbxfp lxdjaykw riubeihx hrbbmbky atjnsacd xtekdptu rdtevcyh cjpssjvp cjywepqo rutbqeuw sdbxunzj ekpvsftr obutdocz jwcpzflw lqcnhser lhojehdt gfrnfmxx jyxwltij pupdxhxy oqqbpjrn zmrobltk rhkvdyec nrvsnrtc pmpmdixu hwqzyvef tcnckoov icgvlwso nqiaause jntduaap timsxgui dqvlekla zkxemsmj zbquxifp mgyvaneg eoqtkvpo wxyqshnk vritmuaz nzqlrzfn'));