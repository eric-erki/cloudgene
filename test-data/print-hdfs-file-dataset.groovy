import cloudgene.sdk.internal.WorkflowContext
import genepi.hadoop.HdfsUtil

def run(WorkflowContext context) {

	def dataset = context.getData("dataset");
	def hdfs = dataset.get("metafile");
	def tempFile = context.getLocalTemp()+"/file.txt";

	//export
	HdfsUtil.get(hdfs, tempFile);

	def content = new File(tempFile).text;
	context.ok(content);

	return true;
}
