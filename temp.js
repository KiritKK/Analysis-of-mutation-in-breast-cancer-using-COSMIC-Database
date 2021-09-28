let url = `https://cancer.sanger.ac.uk/cosmic/gene/positive&export=json&sEcho=1&iColumns=19&sColumns=&iDisplayStart=0&iDisplayLength=30&mDataProp_0=0&sSearch_0=&bRegex_0=false&bSearchable_0=true&bSortable_0=true&mDataProp_1=1&sSearch_1=&bRegex_1=false&bSearchable_1=true&bSortable_1=true&mDataProp_2=2&sSearch_2=&bRegex_2=false&bSearchable_2=true&bSortable_2=true&mDataProp_3=3&sSearch_3=&bRegex_3=false&bSearchable_3=true&bSortable_3=true&mDataProp_4=4&sSearch_4=&bRegex_4=false&bSearchable_4=true&bSortable_4=true&mDataProp_5=5&sSearch_5=&bRegex_5=false&bSearchable_5=true&bSortable_5=true&mDataProp_6=6&sSearch_6=&bRegex_6=false&bSearchable_6=true&bSortable_6=true&mDataProp_7=7&sSearch_7=&bRegex_7=false&bSearchable_7=true&bSortable_7=true&mDataProp_8=8&sSearch_8=&bRegex_8=false&bSearchable_8=true&bSortable_8=true&mDataProp_9=9&sSearch_9=&bRegex_9=false&bSearchable_9=true&bSortable_9=true&mDataProp_10=10&sSearch_10=&bRegex_10=false&bSearchable_10=true&bSortable_10=true&mDataProp_11=11&sSearch_11=&bRegex_11=false&bSearchable_11=true&bSortable_11=true&mDataProp_12=12&sSearch_12=&bRegex_12=false&bSearchable_12=true&bSortable_12=true&mDataProp_13=13&sSearch_13=&bRegex_13=false&bSearchable_13=true&bSortable_13=true&mDataProp_14=14&sSearch_14=&bRegex_14=false&bSearchable_14=true&bSortable_14=true&mDataProp_15=15&sSearch_15=&bRegex_15=false&bSearchable_15=true&bSortable_15=true&mDataProp_16=16&sSearch_16=&bRegex_16=false&bSearchable_16=true&bSortable_16=true&mDataProp_17=17&sSearch_17=&bRegex_17=false&bSearchable_17=true&bSortable_17=true&mDataProp_18=18&sSearch_18=&bRegex_18=false&bSearchable_18=true&bSortable_18=true&sSearch=&bRegex=false&iSortCol_0=0&sSortDir_0=asc&iSortingCols=1`
const fs = require('fs');
let c = [
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=hyperplasia&id=348585&ln=TP53&seqlen=394&sh=flat_epithelial_atypia&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=PR-positive_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=hyperplasia&id=348585&ln=TP53&seqlen=394&sh=ductal_epithelial_hyperplasia-hyperplasia_of_usual_type&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=fibroepithelial_neoplasm&id=348585&ln=TP53&seqlen=394&sh=NS&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=medullary_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=other&id=348585&ln=TP53&seqlen=394&sh=adenoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=hyperplasia&id=348585&ln=TP53&seqlen=394&sh=atypical&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=other&id=348585&ln=TP53&seqlen=394&sh=adenosis&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=NS&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=luminal_B_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=ER-PR-HER-positive_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=ductal_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=myoepithelial_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=hyperplasia&id=348585&ln=TP53&seqlen=394&sh=radial_scar&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=lobular_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=ER-positive_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=ductolobular_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=hormone_receptor-positive_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=acinic_cell_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=HER-positive_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=fibroepithelial_neoplasm&id=348585&ln=TP53&seqlen=394&sh=phyllodes_tumour&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=hyperplasia&id=348585&ln=TP53&seqlen=394&sh=atypical_ductal_hyperplasia&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=normal-like_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=PR-HER-positive_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=adenoid_cystic_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=fibroepithelial_neoplasm&id=348585&ln=TP53&seqlen=394&sh=fibroadenoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=luminal_NS_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=luminal_A_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=other&id=348585&ln=TP53&seqlen=394&sh=adenomyoepithelioma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=other&id=348585&ln=TP53&seqlen=394&sh=papilloma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=neuroendocrine_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=ER-PR-positive_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=hyperplasia&id=348585&ln=TP53&seqlen=394&sh=NS&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=basal_(triple-negative)_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=hyperplasia&id=348585&ln=TP53&seqlen=394&sh=columnar_cell_lesion&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=other&id=348585&ln=TP53&seqlen=394&sh=neoplasm&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=hyperplasia&id=348585&ln=TP53&seqlen=394&sh=atypical_lobular_hyperplasia&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma_in_situ&id=348585&ln=TP53&seqlen=394&sh=lobular_carcinoma_in_situ&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=NS&id=348585&ln=TP53&seqlen=394&sh=NS&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=other&id=348585&ln=TP53&seqlen=394&sh=normal&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma_in_situ&id=348585&ln=TP53&seqlen=394&sh=ductal_carcinoma_in_situ&sn=breast&ss=extramammary&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=ER-HER-positive_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=small_cell_carcinoma&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma_in_situ&id=348585&ln=TP53&seqlen=394&sh=ductal_carcinoma_in_situ&sn=breast&ss=NS&start=1#ts",
    "https://cancer.sanger.ac.uk/cosmic/gene/analysis?all_data=&coords=AA%3AAA&dr=&end=394&gd=&hn=carcinoma&id=348585&ln=TP53&seqlen=394&sh=metaplastic_carcinoma&sn=breast&ss=NS&start=1#ts"
]
fs.appendFile('Links.json', '[', function(err) {
    if (err) throw err;
});

c.forEach(a => {
    let loc = a.indexOf('?')
    let loc2 = a.indexOf('#ts')
    let b = a.substring(loc, loc2)
    let position = url.indexOf('&')
    var output = [url.slice(0, position), b, url.slice(position)].join('');
    fs.appendFile('Links.json', '"' + output + '"' + ",\n", function(err) {
        if (err) throw err;
    });

})

fs.appendFile('Links.json', ']', function(err) {
    if (err) throw err;
});


// let a = []
// document.querySelectorAll('#DataTables_Table_2 td:nth-child(4) > a').forEach((ele) => {a.push(ele.href)})