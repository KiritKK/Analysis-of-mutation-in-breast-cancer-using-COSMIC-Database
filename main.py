from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)
f = open("link_text.txt", "a")
gene_array = ['PIK3CA', 'TP53', 'PIK3CA_ENST00000643187', 'TP53_ENST00000619485', 'TP53_ENST00000620739', 'TP53_ENST00000445888', 'TP53_ENST00000610292', 'TP53_ENST00000420246', 'TP53_ENST00000622645', 'TP53_ENST00000617185', 'TP53_ENST00000610538', 'TP53_ENST00000455263', 'TP53_ENST00000413465', 'TP53_ENST00000359597', 'TP53_ENST00000615910', 'TP53_ENST00000504937', 'TP53_ENST00000618944', 'TP53_ENST00000610623', 'TP53_ENST00000504290', 'TP53_ENST00000510385', 'TP53_ENST00000619186', 'CDH1', 'CDH1_ENST00000611625', 'CDH1_ENST00000621016', 'CDH1_ENST00000612417', 'CDH1_ENST00000422392', 'MED12', 'ESR1', 'GATA3', 'GATA3_ENST00000645492', 'GATA3_ENST00000346208', 'KMT2C', 'MED12_ENST00000374102', 'MED12_ENST00000333646', 'KMT2C_ENST00000355193', 'ESR1_ENST00000443427', 'ESR1_ENST00000206249', 'ESR1_ENST00000427531', 'ESR1_ENST00000338799', 'ESR1_ENST00000456483', 'ESR1_ENST00000406599', 'MAP3K1', 'TTN_ENST00000460472', 'TTN', 'TTN_ENST00000342992', 'TTN_ENST00000591111', 'TTN_ENST00000615779', 'TTN_ENST00000342175', 'TTN_ENST00000359218', 'CSMD1_ENST00000400186', 'CSMD1_ENST00000602557', 'CSMD1_ENST00000520002', 'CSMD1_ENST00000602723', 'CSMD1', 'DMD_ENST00000620040', 'DMD_ENST00000619831', 'DMD_ENST00000378677', 'DMD', 'CSMD1_ENST00000537824', 'RYR2', 'PTPRD', 'RBFOX1_ENST00000641259', 'RBFOX1_ENST00000550418', 'RBFOX1_ENST00000547372', 'RBFOX1_ENST00000553186', 'RBFOX1', 'CNTNAP2', 'CTNNA2_ENST00000466387', 'LRP1B', 'CSMD3', 'CSMD3_ENST00000455883', 'AF241726.2', 'PTEN', 'RYR2_ENST00000360064', 'CSMD3_ENST00000343508', 'RBFOX1_ENST00000552089', 'RBFOX1_ENST00000535565', 'CTNNA2_ENST00000629316', 'CTNNA2_ENST00000496558', 'RBFOX1_ENST00000547338', 'ERBB4', 'USH2A', 'IL1RAPL1', 'NRXN3_ENST00000634499', 'ZFHX3', 'DCC', 'EYS_ENST00000503581', 'NRXN3', 'EYS', 'TMEM132D', 'CTNNA2', 'ERBB4_ENST00000436443', 'GPC5', 'CTNNA3', 'NRXN3_ENST00000554719', 'DPP10_ENST00000410059', 'PCDH15_ENST00000373965', 'PCDH15_ENST00000414778', 'PCDH15_ENST00000644397']
for i in gene_array:
    rand_link = "https://cancer.sanger.ac.uk/cosmic/gene/analysis?hn=all&ln="+i+"&sh=all&sn=breast&ss=all"  
    print(rand_link)
    driver.get(rand_link)
    a = []
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    element = WebDriverWait(driver,180).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, "#DataTables_Table_2 td:nth-child(6) > a"))
    )
    links = driver.find_elements_by_css_selector("#DataTables_Table_2 td:nth-child(6) > a")
    for link in links:
        a.append(link.get_attribute('href'))
    f.write(str(a))
    f.write(",")
f.close()
driver.quit()