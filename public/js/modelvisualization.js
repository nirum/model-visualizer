/* get dat */
var update = function(expt) {
  d3.json('/expt/' + expt, function(models) {

    // add data for each model
    var fobj = new Array(models.length);
    var cc   = new Array(models.length);
    var nll  = new Array(models.length);
    var lld  = new Array(models.length);

    // save every
    var save_every = 5;

    for (var i = 0; i < models.length; i++) {

      // select every nth element
      var tempArray = []
      for (var j = 0; j < models[i].fobj.length; j+=save_every) {
        tempArray[j] = models[i].fobj[j];
      }

      fobj[i] = ["Cell " + models[i].cellidx].concat(tempArray);
      cc[i]   = ["Cell " + models[i].cellidx].concat(models[i].corrcoef);
      nll[i]  = ["Cell " + models[i].cellidx].concat(models[i].neg_loglikelihood);
      lld[i]  = ["Cell " + models[i].cellidx].concat(models[i].loglikelihood_difference);
    }

    c3.generate({
      bindto: '.linechart',
      data: {'columns': fobj}
    });

    c3.generate({
      bindto: '.cc',
      data: {'columns': cc}
    });

    c3.generate({
      bindto: '.nll',
      data: {'columns': nll}
    });

    c3.generate({
      bindto: '.lld',
      data: {'columns': lld}
    });

  });
};

update('073014b');
