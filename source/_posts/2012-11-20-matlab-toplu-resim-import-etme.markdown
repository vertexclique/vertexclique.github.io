---
layout: post
title: "MATLAB Toplu Resim İmport Etme"
date: 2012-11-20 04:09
comments: true
categories: 
---

Matlab'da ayni dizinde istediğiniz tek biçimde resimleriniz yoksa bunu import etmek için oluşturduğum örnek kod:
Ben 3000'e yakın resim yüklediğimden `parfor` kullandım.


{% codeblock [Load iff jpg ifn convert to jpg] [lang:matlab] %}

%% load if and only if jpg...
imagepath = '/Users/vertexclique/Desktop/SAMPLES';

patternname = '*.jpg';

imagelist = dir(fullfile(imagepath,patternname));
imdata = cell(1,numel(imagelist));
parfor k=1:numel(imagelist)
    imdata{k} = imread(fullfile(imagepath,imagelist(k).name));
end

%% ...if not convert to jpg

imagepath = '/Users/vertexclique/Desktop/SAMPLES';
patternname1 = '*.png';
patternname2 = '*.bmp';
patternname3 = '*.tiff';

imagelist1 = dir(fullfile(imagepath,patternname1));
imagelist2 = dir(fullfile(imagepath,patternname2));
imagelist3 = dir(fullfile(imagepath,patternname3));
parfor k=1:numel(imagelist1)
    varpng = imread(fullfile(imagepath,imagelist1(k).name));
    varjpg1 = imwrite(var1 , imagelist1(k)+'.jpg' , 100);
end
parfor k=1:numel(imagelist2)
    varbmp = imread(fullfile(imagepath,imagelist2(k).name));
    varjpg1 = imwrite(var1 , imagelist2(k)+'.jpg' , 100);
end
parfor k=1:numel(imagelist3)
    vartiff = imread(fullfile(imagepath,imagelist3(k).name));
    varjpg1 = imwrite(var1 , imagelist3(k)+'.jpg' , 100);
end


{% endcodeblock %}